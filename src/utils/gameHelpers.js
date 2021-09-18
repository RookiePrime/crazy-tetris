export const generateBoard = () => {
    const y = 20;
    const x = 12;

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

    return boardArr;
};