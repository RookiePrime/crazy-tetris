let gameTime;

const blockLoop = () => {
    const playerBlock = document.querySelector('canvas');

    const playerBlockPosition = {
        x: playerBlock.getAttribute('data-x'),
        y: playerBlock.getAttribute('data-y')
    };

    
}

const setSpeed = speed => {
    let count = 0;
    gameTime = setInterval(() => {
        count++;
        console.log(count);
        blockLoop();
    }, speed);
};

const stopGame = () => {
    clearInterval(gameTime);
}


const startGame = () => {
    setSpeed(1000);
};

document.querySelector('#start').addEventListener('click', startGame);
document.querySelector('#stop').addEventListener('click', stopGame);