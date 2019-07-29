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
    {
      id: 'darkAnthindol',
      name: 'Dark Anthindol',
      require: {}
    },
    {
      id: 'sleepless',
      name: 'Sleepless',
      require: {}
    },
    {
      id: 'dasMoge',
      name: 'Das Moge',
      require: {}
    },
    {
      id: 'amuvor',
      name: 'Amuvor',
      require: {}
    },
    {
      id: 'mihm',
      name: 'Mihm',
      require: {}
    },
    {
      id: 'aspen',
      name: 'Aspen',
      require: {}
    },
    {
      id: 'amenRa',
      name: 'Amen-ra',
      require: {}
    },
  ],
  6: [
    {
      id: 'darkSpirit',
      name: 'Dark Spirit',
      require: {
        5: {
          darkSpirit: 2,
          darknessFanella: 1,
        },
      }
    },
    {
      id: 'darkAnthindol',
      name: 'Dark Anthindol',
      require: {
        5: {
          darkAnthindol: 2,
          darknessFanella: 1,
        },
      }
    },
    {
      id: 'sleepless',
      name: 'Sleepless',
      require: {
        5: {
          sleepless: 2,
          logan: 1,
        },
      }
    },
    {
      id: 'dasMoge',
      name: 'Das Moge',
      require: {
        5: {
          dasMoge: 2,
          darkSpirit: 1,
        },
      }
    },
    {
      id: 'amuvor',
      name: 'Amuvor',
      require: {
        5: {
          amuvor: 2,
          darknessFanella: 1,
        },
      }
    },
    {
      id: 'mihm',
      name: 'Mihm',
      require: {
        5: {
          mihm: 2,
          darkSpirit: 1,
        },
      }
    },
    {
      id: 'aspen',
      name: 'Aspen',
      require: {
        5: {
          aspen: 2,
          logan: 1,
        },
      }
    },
    {
      id: 'amenRa',
      name: 'Amen-ra',
      require: {
        5: {
          amenRa: 2,
          logan: 1,
        },
      }
    },
  ],
  7: [
    {
      id: 'darkSpirit',
      name: 'Dark Spirit',
      require: {
        6: {
          darkSpirit: 1,
        },
      }
    },
    {
      id: 'darkAnthindol',
      name: 'Dark Anthindol',
      require: {
        6: {
          darkAnthindol: 1,
        },
      }
    },
    {
      id: 'sleepless',
      name: 'Sleepless',
      require: {
        6: {
          sleepless: 1,
        },
      }
    },
    {
      id: 'dasMoge',
      name: 'Das Moge',
      require: {
        6: {
          dasMoge: 1,
        },
      }
    },
    {
      id: 'amuvor',
      name: 'Amuvor',
      require: {
        6: {
          amuvor: 1,
        },
      }
    },
    {
      id: 'mihm',
      name: 'Mihm',
      require: {
        6: {
          mihm: 1,
        },
      }
    },
    {
      id: 'aspen',
      name: 'Aspen',
      require: {
        6: {
          aspen: 1,
        },
      }
    },
    {
      id: 'amenRa',
      name: 'Amen-ra',
      require: {
        6: {
          amenRa: 1,
        },
      }
    },
  ],
  8: [
    {
      id: 'darkSpirit',
      name: 'Dark Spirit',
      require: {
        7: {
          darkSpirit: 1,
        },
      }
    },
    {
      id: 'darkAnthindol',
      name: 'Dark Anthindol',
      require: {
        7: {
          darkAnthindol: 1,
        },
      }
    },
    {
      id: 'sleepless',
      name: 'Sleepless',
      require: {
        7: {
          sleepless: 1,
        },
      }
    },
    {
      id: 'dasMoge',
      name: 'Das Moge',
      require: {
        7: {
          dasMoge: 1,
        },
      }
    },
    {
      id: 'amuvor',
      name: 'Amuvor',
      require: {
        7: {
          amuvor: 1,
        },
      }
    },
    {
      id: 'mihm',
      name: 'Mihm',
      require: {
        7: {
          mihm: 1,
        },
      }
    },
    {
      id: 'aspen',
      name: 'Aspen',
      require: {
        7: {
          aspen: 1,
        },
      }
    },
    {
      id: 'amenRa',
      name: 'Amen-ra',
      require: {
        7: {
          amenRa: 1,
        },
      }
    },
  ],
  9: [
    {
      id: 'darkSpirit',
      name: 'Dark Spirit',
      require: {
        5: {
          darkSpirit: 1,
        },
        8: {
          darkSpirit: 1,
        },
      }
    },
    {
      id: 'darkAnthindol',
      name: 'Dark Anthindol',
      require: {
        5: {
          darkAnthindol: 1,
        },
        8: {
          darkAnthindol: 1,
        },
      }
    },
    {
      id: 'sleepless',
      name: 'Sleepless',
      require: {
        5: {
          sleepless: 1,
        },
        8: {
          sleepless: 1,
        },
      }
    },
    {
      id: 'dasMoge',
      name: 'Das Moge',
      require: {
        5: {
          dasMoge: 1,
        },
        8: {
          dasMoge: 1,
        },
      }
    },
    {
      id: 'amuvor',
      name: 'Amuvor',
      require: {
        5: {
          amuvor: 1,
        },
        8: {
          amuvor: 1,
        },
      }
    },
    {
      id: 'mihm',
      name: 'Mihm',
      require: {
        5: {
          mihm: 1,
        },
        8: {
          mihm: 1,
        },
      }
    },
    {
      id: 'aspen',
      name: 'Aspen',
      require: {
        5: {
          aspen: 1,
        },
        8: {
          aspen: 1,
        },
      }
    },
    {
      id: 'amenRa',
      name: 'Amen-ra',
      require: {
        5: {
          amenRa: 1,
        },
        8: {
          amenRa: 1,
        },
      }
    },
  ],
};
