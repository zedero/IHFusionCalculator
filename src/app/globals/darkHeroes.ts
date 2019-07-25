export const DARK_HEROES = {
  3: [
    {
      id: 'ghostOfAspen',
      name: 'Ghost of Aspen',
      require: {}
    },
    ],
  4: [
    {
      id: 'darknessFanella',
      name: 'Darkness Fanella',
      require: {}
    },
    {
      id: 'logan',
      name: 'Logan',
      require: {}
    },
    {
      id: 'darkSpirit',
      name: 'Dark Spirit',
      require: {}
    },
  ],
  5: [
    {
      id: 'darknessFanella',
      name: 'Darkness Fanella',
      require: {
        3: {
          ghostOfAspen: 4,
        },
        4: {
          darknessFanella: 4,
        }
      }
    },
    {
      id: 'logan',
      name: 'Logan',
      require: {
        3: {
          ghostOfAspen: 4,
        },
        4: {
          logan: 4,
        }
      }
    },
    {
      id: 'darkSpirit',
      name: 'Dark Spirit',
      require: {
        3: {
          ghostOfAspen: 4,
        },
        4: {
          darkSpirit: 4,
        }
      }
    },
  ],
  6: [
    {
      id: 'thale',
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
      id: 'thale',
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
      id: 'thale',
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
      id: 'thale',
      name: 'Thale',
      require: {
        8: {
          thale: 1,
        },
      }
    },
  ],
};

