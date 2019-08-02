export const ABYSS_HEROES = {
  3: [
    {
      id: 'abyssGuard',
      name: 'Abyss Guard',
      require: {}
    },
    {
      id: 'wildBeast',
      name: 'Wild Beast',
      require: {}
    },
    {
      id: 'succube',
      name: 'Succube',
      require: {}
    },
    {
      id: 'flamingLips',
      name: 'Flaming Lips',
      require: {}
    },
    {
      id: 'mirko',
      name: 'Mirko',
      require: {}
    },
    ],
  4: [
    {
      id: 'rogge',
      name: 'Rogge',
      require: {}
    },
    {
      id: 'destroyer',
      name: 'Destroyer',
      require: {}
    },
    {
      id: 'tanner',
      name: 'Tanner',
      require: {}
    },
    {
      id: 'akasha',
      name: 'Akasha',
      require: {}
    },
    {
      id: 'lemegeton',
      name: 'Lemegeton',
      require: {}
    },
    {
      id: 'aleria',
      name: 'Aleria',
      require: {}
    },
    {
      id: 'norma',
      name: 'Norma',
      require: {}
    },
    {
      id: 'immolatus',
      name: 'Immolatus',
      require: {}
    },
  ],
  5: [
    {
      id: 'rogge',
      name: 'Rogge',
      require: {
        3: {
          wildBeast: 4,
        },
        4: {
          rogge: 4,
        }
      }
    },
    {
      id: 'destroyer',
      name: 'Destroyer',
      require: {
        3: {
          wildBeast: 4,
        },
        4: {
          destroyer: 4,
        }
      }
    },
    {
      id: 'tanner',
      name: 'Tanner',
      require: {
        3: {
          abyssGuard: 4,
        },
        4: {
          tanner: 4,
        }
      }
    },
    {
      id: 'akasha',
      name: 'Akasha',
      require: {
        3: {
          succube: 4,
        },
        4: {
          akasha: 4,
        }
      }
    },
    {
      id: 'lemegeton',
      name: 'Lemegeton',
      require: {
        3: {
          flamingLips: 4,
        },
        4: {
          lemegeton: 4,
        }
      }
    },
    {
      id: 'aleria',
      name: 'Aleria',
      require: {
        3: {
          mirko: 4,
        },
        4: {
          aleria: 4,
        }
      }
    },
    {
      id: 'norma',
      name: 'Norma',
      require: {
        3: {
          mirko: 4,
        },
        4: {
          norma: 4,
        }
      }
    },
    {
      id: 'immolatus',
      name: 'Immolatus',
      require: {
        3: {
          flamingLips: 4,
        },
        4: {
          immolatus: 4,
        }
      }
    },
    {
      id: 'skerei',
      name: 'Skerei',
      require: {}
    },
    {
      id: 'dantalian',
      name: 'Dantalian',
      require: {}
    },
    {
      id: 'margaret',
      name: 'Margaret',
      require: {}
    },
    {
      id: 'barea',
      name: 'Barea',
      require: {}
    },
    {
      id: 'queen',
      name: 'Queen',
      require: {}
    },
    {
      id: 'lordBalrog',
      name: 'Lord Balrog',
      require: {}
    },
    {
      id: 'fatMu',
      name: 'Fat Mu',
      require: {}
    },
    {
      id: 'gusta',
      name: 'Gusta',
      require: {}
    },
    {
      id: 'karim',
      name: 'Karim',
      require: {}
    },
    {
      id: 'kroos',
      name: 'Kroos',
      require: {}
    },
    {
      id: 'kingBarton',
      name: 'King Barton',
      require: {}
    },
    {
      id: 'cthugha',
      name: 'Cthugha',
      require: {}
    },
    {
      id: 'nakia',
      name: 'Nakia',
      require: {}
    },
  ],
  6: [
    {
      id: 'destroyer',
      name: 'Destroyer',
      require: {
        5: {
          destroyer: 2,
          akasha: 1,
        },
      }
    },
    {
      id: 'aleria',
      name: 'Aleria',
      require: {
        5: {
          aleria: 2,
          norma: 1,
        },
      }
    },
    {
      id: 'norma',
      name: 'Norma',
      require: {
        5: {
          norma: 2,
          aleria: 1,
        },
      }
    },
    {
      id: 'skerei',
      name: 'Skerei',
      require: {
        5: {
          skerei: 2,
          destroyer: 1,
        },
      }
    },
    {
      id: 'dantalian',
      name: 'Dantalian',
      require: {
        5: {
          dantalian: 2,
          lemegeton: 1,
        },
      }
    },
    {
      id: 'margaret',
      name: 'Margaret',
      require: {
        5: {
          margaret: 2,
          norma: 1,
        },
      }
    },
    {
      id: 'barea',
      name: 'Barea',
      require: {
        5: {
          barea: 2,
          rogge: 1,
        },
      }
    },
    {
      id: 'queen',
      name: 'Queen',
      require: {
        5: {
          queen: 2,
          akasha: 1,
        },
      }
    },
    {
      id: 'lordBalrog',
      name: 'Lord Balrog',
      require: {
        5: {
          lordBalrog: 2,
          lemegeton: 1,
        },
      }
    },
    {
      id: 'fatMu',
      name: 'Fat Mu',
      require: {
        5: {
          fatMu: 2,
          tanner: 1,
        },
      }
    },
    {
      id: 'gusta',
      name: 'Gusta',
      require: {
        5: {
          gusta: 2,
          tanner: 1,
        },
      }
    },
    {
      id: 'karim',
      name: 'Karim',
      require: {
        5: {
          karim: 2,
          aleria: 1,
        },
      }
    },
    {
      id: 'kroos',
      name: 'Kroos',
      require: {
        5: {
          kroos: 2,
          rogge: 1,
        },
      }
    },
    {
      id: 'kingBarton',
      name: 'King Barton',
      require: {
        5: {
          kingBarton: 2,
          immolatus: 1,
        },
      }
    },
    {
      id: 'cthugha',
      name: 'Cthugha',
      require: {
        5: {
          cthugha: 2,
          lemegeton: 1,
        },
      }
    },
    {
      id: 'nakia',
      name: 'Nakia',
      require: {
        5: {
          nakia: 2,
          akasha: 1,
        },
      }
    },
  ],
  7: [
    {
      id: 'destroyer',
      name: 'Destroyer',
      require: {
        6: {
          destroyer: 1,
        },
      }
    },
    {
      id: 'aleria',
      name: 'Aleria',
      require: {
        6: {
          aleria: 1,
        },
      }
    },
    {
      id: 'norma',
      name: 'Norma',
      require: {
        6: {
          norma: 1,
        },
      }
    },
    {
      id: 'skerei',
      name: 'Skerei',
      require: {
        6: {
          skerei: 1,
        },
      }
    },
    {
      id: 'dantalian',
      name: 'Dantalian',
      require: {
        6: {
          dantalian: 1,
        },
      }
    },
    {
      id: 'margaret',
      name: 'Margaret',
      require: {
        6: {
          margaret: 1,
        },
      }
    },
    {
      id: 'barea',
      name: 'Barea',
      require: {
        6: {
          barea: 1,
        },
      }
    },
    {
      id: 'queen',
      name: 'Queen',
      require: {
        6: {
          queen: 1,
        },
      }
    },
    {
      id: 'lordBalrog',
      name: 'Lord Balrog',
      require: {
        6: {
          lordBalrog: 1,
        },
      }
    },
    {
      id: 'fatMu',
      name: 'Fat Mu',
      require: {
        6: {
          fatMu: 1,
        },
      }
    },
    {
      id: 'gusta',
      name: 'Gusta',
      require: {
        6: {
          gusta: 1,
        },
      }
    },
    {
      id: 'karim',
      name: 'Karim',
      require: {
        6: {
          karim: 1,
        },
      }
    },
    {
      id: 'kroos',
      name: 'Kroos',
      require: {
        6: {
          kroos: 1,
        },
      }
    },
    {
      id: 'kingBarton',
      name: 'King Barton',
      require: {
        6: {
          kingBarton: 1,
        },
      }
    },
    {
      id: 'cthugha',
      name: 'Cthugha',
      require: {
        6: {
          cthugha: 1,
        },
      }
    },
    {
      id: 'nakia',
      name: 'Nakia',
      require: {
        6: {
          nakia: 1,
        },
      }
    },
  ],
  8: [
    {
      id: 'destroyer',
      name: 'Destroyer',
      require: {
        7: {
          destroyer: 1,
        },
      }
    },
    {
      id: 'aleria',
      name: 'Aleria',
      require: {
        7: {
          aleria: 1,
        },
      }
    },
    {
      id: 'norma',
      name: 'Norma',
      require: {
        7: {
          norma: 1,
        },
      }
    },
    {
      id: 'skerei',
      name: 'Skerei',
      require: {
        7: {
          skerei: 1,
        },
      }
    },
    {
      id: 'dantalian',
      name: 'Dantalian',
      require: {
        7: {
          dantalian: 1,
        },
      }
    },
    {
      id: 'margaret',
      name: 'Margaret',
      require: {
        7: {
          margaret: 1,
        },
      }
    },
    {
      id: 'barea',
      name: 'Barea',
      require: {
        7: {
          barea: 1,
        },
      }
    },
    {
      id: 'queen',
      name: 'Queen',
      require: {
        7: {
          queen: 1,
        },
      }
    },
    {
      id: 'lordBalrog',
      name: 'Lord Balrog',
      require: {
        7: {
          lordBalrog: 1,
        },
      }
    },
    {
      id: 'fatMu',
      name: 'Fat Mu',
      require: {
        7: {
          fatMu: 1,
        },
      }
    },
    {
      id: 'gusta',
      name: 'Gusta',
      require: {
        7: {
          gusta: 1,
        },
      }
    },
    {
      id: 'karim',
      name: 'Karim',
      require: {
        7: {
          karim: 1,
        },
      }
    },
    {
      id: 'kroos',
      name: 'Kroos',
      require: {
        7: {
          kroos: 1,
        },
      }
    },
    {
      id: 'kingBarton',
      name: 'King Barton',
      require: {
        7: {
          kingBarton: 1,
        },
      }
    },
    {
      id: 'cthugha',
      name: 'Cthugha',
      require: {
        7: {
          cthugha: 1,
        },
      }
    },
    {
      id: 'nakia',
      name: 'Nakia',
      require: {
        7: {
          nakia: 1,
        },
      }
    },
  ],
  9: [
    {
      id: 'destroyer',
      name: 'Destroyer',
      require: {
        5: {
          destroyer: 1,
        },
        8: {
          destroyer: 1,
        },
      }
    },
    {
      id: 'aleria',
      name: 'Aleria',
      require: {
        5: {
          aleria: 1,
        },
        8: {
          aleria: 1,
        },
      }
    },
    {
      id: 'norma',
      name: 'Norma',
      require: {
        5: {
          norma: 1,
        },
        8: {
          norma: 1,
        },
      }
    },
    {
      id: 'skerei',
      name: 'Skerei',
      require: {
        5: {
          skerei: 1,
        },
        8: {
          skerei: 1,
        },
      }
    },
    {
      id: 'dantalian',
      name: 'Dantalian',
      require: {
        5: {
          dantalian: 1,
        },
        8: {
          dantalian: 1,
        },
      }
    },
    {
      id: 'margaret',
      name: 'Margaret',
      require: {
        5: {
          margaret: 1,
        },
        8: {
          margaret: 1,
        },
      }
    },
    {
      id: 'barea',
      name: 'Barea',
      require: {
        5: {
          barea: 1,
        },
        8: {
          barea: 1,
        },
      }
    },
    {
      id: 'queen',
      name: 'Queen',
      require: {
        5: {
          queen: 1,
        },
        8: {
          queen: 1,
        },
      }
    },
    {
      id: 'lordBalrog',
      name: 'Lord Balrog',
      require: {
        5: {
          lordBalrog: 1,
        },
        8: {
          lordBalrog: 1,
        },
      }
    },
    {
      id: 'fatMu',
      name: 'Fat Mu',
      require: {
        5: {
          fatMu: 1,
        },
        8: {
          fatMu: 1,
        },
      }
    },
    {
      id: 'gusta',
      name: 'Gusta',
      require: {
        5: {
          gusta: 1,
        },
        8: {
          gusta: 1,
        },
      }
    },
    {
      id: 'karim',
      name: 'Karim',
      require: {
        5: {
          karim: 1,
        },
        8: {
          karim: 1,
        },
      }
    },
    {
      id: 'kroos',
      name: 'Kroos',
      require: {
        5: {
          kroos: 1,
        },
        8: {
          kroos: 1,
        },
      }
    },
    {
      id: 'kingBarton',
      name: 'King Barton',
      require: {
        5: {
          kingBarton: 1,
        },
        8: {
          kingBarton: 1,
        },
      }
    },
    {
      id: 'cthugha',
      name: 'Cthugha',
      require: {
        5: {
          cthugha: 1,
        },
        8: {
          cthugha: 1,
        },
      }
    },
    {
      id: 'nakia',
      name: 'Nakia',
      require: {
        5: {
          nakia: 1,
        },
        8: {
          nakia: 1,
        },
      }
    },
  ],
};

