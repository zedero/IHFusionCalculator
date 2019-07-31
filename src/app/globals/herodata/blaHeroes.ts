export const FORTRESS_HEROES = {
  3: [
    {
      id: 'sybil1',
      name: 'Sybil',
      require: {}
    },
    ],
  4: [
    {
      id: 'chief1',
      name: 'Chief',
      require: {}
    },
  ],
  5: [
    {
      id: 'chief1',
      name: 'Chief',
      require: {
        3: {
          blueShaman: 4,
        },
        4: {
          chief: 4,
        }
      }
    },
  ],
  6: [
    {
      id: 'thale1',
      name: 'Thale',
      require: {
        5: {
          thale: 2,
          zekkis: 1,
        },
      }
    },
  ],
  7: [
    {
      id: 'thale1',
      name: 'Thale',
      require: {
        6: {
          thale: 1,
        },
      }
    },
  ],
  8: [
    {
      id: 'thale1',
      name: 'Thale',
      require: {
        7: {
          thale: 1,
        },
      }
    },
  ],
  9: [
    {
      id: 'thale1',
      name: 'Thale',
      require: {
        5: {
          thale: 1,
        },
        8: {
          thale: 1,
        },
      }
    },
  ],
};

