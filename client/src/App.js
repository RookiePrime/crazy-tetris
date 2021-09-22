import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Homepage from './pages/Homepage';
import Profile from './components/Profile';
import Highscores from './components/Highscores';
import Game from './pages/Game';
import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <>
      {/* <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/highscores' component={Highscores} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </ApolloProvider> */}
      <Profile />
    </>
  );
}

export default App;
