import {
    MOVE_RIGHT, 
    MOVE_LEFT,
    MOVE_DOWN,
    ROTATE,
    PAUSE,
    RESUME,
    RESTART,
    GAME_OVER
} from '../actions'

//define a function to handle the actions
const gameReducer = (state = {}, action) => {
    switch(action.type) {
        case ROTATE:
    
            return state
  
        case MOVE_RIGHT:
  
            return state
  
        case MOVE_LEFT:
  
            return state
  
        case MOVE_DOWN:
  
            return state
  
        case RESUME:
  
            return state
  
        case PAUSE:
  
            return state
  
        case GAME_OVER:
  
            return state
  
        case RESTART:
  
            return state
  
      default:
        return state
    }
}
  
export default gameReducer;
