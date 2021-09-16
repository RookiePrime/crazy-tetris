const tetrominos = [
    {
        name: 'L',
        height: 2,
        width: 3,
        design: [
            ['L', 'clear'],
            ['L', 'clear'],
            ['L', 'L']
        ],
        origin: [1, 0],
        color: 'blue'
    },
    {
        name: 'S',
        height: 2,
        width: 3,
        design: [
            ['clear', 'S'],
            ['S', 'S'],
            ['S', 'clear']
        ],
        color: 'red'
    },
    {
        name: 'Z',
        height: 2,
        width: 3,
        design: [
            ['Z', 'clear'],
            ['Z', 'Z'],
            ['clear', 'Z']
        ],
        color: 'yellow'
    },
    {
        name: 'J',
        height: 2,
        width: 3,
        design: [
            ['J', 'J'],
            ['J', 'clear'],
            ['J', 'clear']
        ],
        color: 'green'
    }
];

module.exports = tetrominos;