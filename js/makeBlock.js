const box = document.querySelector('div');
const SQUARE_SCALE = 50;

let rotation = 0;

function drawSquare(x, y, ctx) {
    ctx.fillRect(x, y, SQUARE_SCALE, SQUARE_SCALE);
    ctx.strokeRect(x, y, SQUARE_SCALE, SQUARE_SCALE);
}

function createTetromino(shape) {
    const c = document.createElement('canvas');

    c.setAttribute('height', `${shape.height * SQUARE_SCALE}`);
    c.setAttribute('width', `${shape.width * SQUARE_SCALE}`);
    c.setAttribute('style', `position: absolute; top: 40px; ${shape.origin}`);
    c.setAttribute('data-origin', `${shape.origin}`);
    c.setAttribute('data-x', '50');
    c.setAttribute('data-y', '0');
    const ctx = c.getContext('2d');

    ctx.fillStyle = shape.color;

    for (let i = 0; i < shape.design.length; i++) {
        for (let j = 0; j < shape.design[i].length; j++) {
            if (shape.design[i][j]) {
                drawSquare((i) * 50, (j) * 50, ctx);
            }
        }
    }

    box.appendChild(c);
}

const rotateBtnEl = document.querySelector('#rotate');
const createBtnEl = document.querySelector('#create');

createBtnEl.addEventListener('click', () => {
    const shapes = [
        {
            name: 'L',
            height: 2,
            width: 3,
            design: [
                [true, false],
                [true, false],
                [true, true]
            ],
            origin: 'transform-origin: 75px 25px;',
            color: 'blue'
        },
        {
            name: 'S',
            height: 2,
            width: 3,
            design: [
                [false, true],
                [true, true],
                [true, false]
            ],
            origin: 'transform-origin: 75px 25px;',
            color: 'red'
        },
        {
            name: 'Z',
            height: 2,
            width: 3,
            design: [
                [true, false],
                [true, true],
                [false, true]
            ],
            origin: 'transform-origin: 75px 25px;',
            color: 'green'
        },
        {
            name: 'J',
            height: 2,
            width: 3,
            design: [
                [true, true],
                [true, false],
                [true, false]
            ],
            origin: 'transform-origin: 75px 25px;',
            color: 'yellow'
        }
    ];

    const randoTetro = Math.floor(Math.random() * shapes.length);

    createTetromino(shapes[randoTetro]);   
});

rotateBtnEl.addEventListener('click', () => {
    const c = document.querySelector('canvas');
    const origin = c.getAttribute('data-origin');
    rotation === 270 ? rotation = 0 : rotation += 90;

    c.setAttribute('style', `${origin} transform: rotate(${rotation}deg);`);
});