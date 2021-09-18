const tetrominos = [
    {
        name: 'L',
        design: [
            [
                ['clear', 'clear', 'clear', 'clear'],
                ['clear', 'L', 'clear', 'clear'],
                ['clear', 'L', 'clear', 'clear'],
                ['clear', 'L', 'L', 'clear']
            ],
            [
                ['clear', 'clear', 'clear', 'clear'],
                ['L', 'L', 'L', 'clear'],
                ['L', 'clear', 'clear', 'clear'],
                ['clear', 'clear', 'clear', 'clear']
            ],
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