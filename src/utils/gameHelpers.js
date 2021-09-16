export const generateBoard = () => {
    const y = 20;
    const x = 12;
    
    // Where the blocks spawn
    const spawn = Math.floor(x / 2);
    // The initial empty array
    const boardArr = [];

    for (let i = 0; i < y; i++) {
        boardArr.push([]);
        for (let j = 0; j < x; j++) {
            boardArr[i].push({
                contents: 'clear'
            });
        }
    }

    boardArr[0][spawn].spawn = true;

    return boardArr;
};