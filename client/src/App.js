import React from 'react';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Highscores from './components/Highscores';
import Game from './pages/Game';

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
      <ApolloProvider client={client}>
        <Game />
        <Homepage />
        <Profile />
        <Highscores />
      </ApolloProvider>
    </>
  );
}

export default App;
