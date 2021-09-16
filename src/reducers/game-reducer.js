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

import { defaultState, nextRotation, canMoveTo } from '../utils'

//define a function to handle the actions
const gameReducer = (state = defaultState(), action) => {
    const { shape, grid, x, y, rotation, nextShape, score, isRunning } = state;

    switch(action.type) {
        case ROTATE:
            const newRotation = nextRotation(shape, rotation)
            if(canMoveTo(shape, grid, x, y, newRotation)) {
                return { ...state, rotation: newRotation };
            }
            return state
  
        case MOVE_RIGHT:
            //add 1 from x and check if the new position is possible
            if(canMoveTo(shape, grid, x+1, y, rotation)) {
                return { ...state, x: x+1 };
            }
            return state
  
        case MOVE_LEFT:
            //subtract 1 from x and check if the new position is possible
            if(canMoveTo(shape, grid, x-1, y, rotation)) {
                return { ...state, x: x-1 };
            }
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
