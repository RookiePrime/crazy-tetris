// Returns the default grid
export const gridDefault = () => {
    const rows = 18
    const cols = 10
    const array = []
  
    for (let row = 0; row < rows; row++) {
        array.push([])
        for (let col = 0; col < cols; col++) {
          array[row].push(0)
        }
    }
  
    return array
}

// Define block shapes and their rotations as arrays.
export const shapes = [
  // none
  [[[0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]]],

  // I
  [[[0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]],

    [[0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]]],

  // T
  [[[0,0,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [0,0,0,0]],

    [[0,1,0,0],
    [1,1,0,0],
    [0,1,0,0],
    [0,0,0,0]],

    [[0,1,0,0],
    [1,1,1,0],
    [0,0,0,0],
    [0,0,0,0]],

    [[0,1,0,0],
    [0,1,1,0],
    [0,1,0,0],
    [0,0,0,0]]],

  // L
  [[[0,0,0,0],
    [1,1,1,0],
    [1,0,0,0],
    [0,0,0,0]],

    [[1,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,0,0,0]],

    [[0,0,1,0],
    [1,1,1,0],
    [0,0,0,0],
    [0,0,0,0]],

    [[0,1,0,0],
    [0,1,0,0],
    [0,1,1,0],
    [0,0,0,0]]],

  // J
  [[[1,0,0,0],
    [1,1,1,0],
    [0,0,0,0],
    [0,0,0,0]],

    [[0,1,1,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,0,0,0]],

    [[0,0,0,0],
    [1,1,1,0],
    [0,0,1,0],
    [0,0,0,0]],

    [[0,1,0,0],
    [0,1,0,0],
    [1,1,0,0],
    [0,0,0,0]]],

  // Z
  [[[0,0,0,0],
    [1,1,0,0],
    [0,1,1,0],
    [0,0,0,0]],

    [[0,0,1,0],
    [0,1,1,0],
    [0,1,0,0],
    [0,0,0,0]]],

  // S
  [[[0,0,0,0],
    [0,1,1,0],
    [1,1,0,0],
    [0,0,0,0]],

    [[0,1,0,0],
    [0,1,1,0],
    [0,0,1,0],
    [0,0,0,0]]],

  // O
  [[[0,1,1,0],
    [0,1,1,0],
    [0,0,0,0],
    [0,0,0,0]]],

    // CRAZY SHAPE
    [[[0,0,1,0],
      [0,1,1,1],
      [0,0,1,0],
      [0,0,0,0]]],
]

// Random Shape
export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomShape = () => {
  return random(1, shapes.length - 1)
}

// function to return the default object with properties to reflect default game state
export const defaultState = () => {
  return {
      grid: gridDefault(),
      shape: randomShape(),
      rotation: 0,
      // put the shape in the center of the grid, above the top
      x: 3,
      y: -3,
      nextShape: randomShape(),
      score: 0,
      level: 1,
      speed: 1000,
      // Tell the game that it's currently running
      isRunning: true,
      gameOver: false
  }
}

//rotate function
export const nextRotation = (shape, rotation) => {
  return (rotation + 1) % shapes[shape].length
}

export const canMoveTo = (shape, grid, x, y, rotation) => {
  const currentShape = shapes[shape][rotation];

  //loop through all rows and cols of the shape
  for (let row = 0; row < currentShape.length; row++) {
    for(let col = 0; col < currentShape[row].length; col++) {
      //look for a 1
      if(currentShape[row][col] !== 0) {
        const proposedX = col + x;
        const proposedY = row + y;
        if(proposedY < 0) {
          continue
        }

        //get the row on the grid
        const possibleRow = grid[proposedY];
        
        //check if row exists
        if(possibleRow) {
          if(possibleRow[proposedX] === undefined || possibleRow[proposedX] !== 0) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

// Add block to grid
export const addBlockToGrid = (shape, grid, x, y, rotation) => {
  
  let blockOffGrid = false;
  const block = shapes[shape][rotation];
  const newGrid = [...grid]; //copy the grid      
  // Map the Block onto the grid                                                           
  for (let row = 0; row < block.length; row++) {
      for (let col = 0; col < block[row].length; col++) {
          if (block[row][col]) {
              const yIndex = row + y;
              //if yIndex is less than 0, the block is off the screen
              // game over
              if(yIndex < 0) {
                blockOffGrid = true;
              } else {
                newGrid[row + y][col + x] = shape;
              }
          }
      }
  }
  return {grid: newGrid, gameOver: blockOffGrid};
}

// Checks for completed rows and scores points
export const checkRows = (grid) => {
  // Points increase for each row completed
  const points = [0, 40, 100, 300, 1200]
  let completedRows = 0
  for (let row = 0; row < grid.length; row++) {
    // No empty cells means it can't find a 0, so the row must be complete!
    if (grid[row].indexOf(0) === -1) {
      completedRows += 1
      // Remove the row and add a new empty one at the top
      grid.splice(row, 1)
      grid.unshift(Array(10).fill(0))
    }

  }
  return points[completedRows]
}

export const levelUp = (newScore) => {
  let levelInc = 0;
  if(newScore >= 200 && newScore < 400) {
    levelInc++;
  } else if (newScore >= 400 && newScore < 600) {
    levelInc++;
  } else if (newScore >= 600 && newScore < 800) {
    levelInc++;
  } else if (newScore >= 800 && newScore < 1000) {
    levelInc++;
  } else if (newScore >= 1000 && newScore < 1200) {
    levelInc++;
  } else if (newScore >= 1200 && newScore < 1400) {
    levelInc++;
  } else if (newScore >= 1400 && newScore < 1600) {
    levelInc++;
  } else if (newScore >= 1600 && newScore < 1800) {
    levelInc++;
  }  else if (newScore >= 1800 && newScore < 2000) {
    levelInc++;
  }
  return levelInc;
}