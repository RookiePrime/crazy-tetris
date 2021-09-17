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

import {
    defaultState,
    nextRotation,
    canMoveTo,
    addBlockToGrid,
    checkRows,
    randomShape
} from '../utils'

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
            //get position of potential Y
            const potentialY = y + 1;
            if(canMoveTo(shape, grid, x, potentialY, rotation)) {
                return {...state, y: potentialY};
            }

            // If block is placed
            const newGrid = addBlockToGrid(shape, grid, x, y, rotation)
            
            // reset some things to start a new shape/block
            const newState = defaultState()
            newState.grid = newGrid
            newState.shape = nextShape
            newState.nextShape = randomShape()
            newState.score = score
            newState.isRunning = isRunning

            if (!canMoveTo(nextShape, newGrid, 0, 4, 0)) {
                // Game Over
                newState.shape = 0
                return { ...state, gameOver: true }
            }
            // Update the score based on if rows were completed or not
            newState.score = score + checkRows(newGrid)

            return newState
  
        case RESUME:
            
            return { ...state, isRunning: true }
  
        case PAUSE:
  
            return { ...state, isRunning: false }
  
        case GAME_OVER:
  
            return state
  
        case RESTART:
  
            return state
  
      default:
        return state
    }
}
  
export default gameReducer;
