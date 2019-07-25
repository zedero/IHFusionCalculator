export const FOREST_HEROES = {
  3: [
    {
      id: 'sybil',
      name: 'Sybil',
      require: {}
    },
    {
      id: 'undomiel',
      name: 'Undomiel',
      require: {}
    },
    {
      id: 'blueShaman',
      name: 'Blue Shaman',
      require: {}
    },
    {
      id: 'frey',
      name: 'Frey',
      require: {}
    },
    {
      id: 'forestsCaptain',
      name: 'Forests Captain',
      require: {}
    },
    ],
  4: [
    {
      id: 'chief',
      name: 'Chief',
      require: {}
    },
    {
      id: 'windWalker',
      name: 'Wind Walker',
      require: {}
    },
    {
      id: 'entElder',
      name: 'Ent Elder',
      require: {}
    },
    {
      id: 'headstriker',
      name: 'Headstriker',
      require: {}
    },
    {
      id: 'thale',
      name: 'Thale',
      require: {}
    },
    {
      id: 'kargath',
      name: 'Kargath',
      require: {}
    },
    {
      id: 'theGreyEyed',
      name: 'The Grey-eyed',
      require: {}
    },
    {
      id: 'zekkis',
      name: 'Zekkis',
      require: {}
    },
  ],
  5: [
    {
      id: 'chief',
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
    {
      id: 'windWalker',
      name: 'Wind Walker',
      require: {
        3: {
          sybil: 4,
        },
        4: {
          windWalker: 4,
        }
      }
    },
    {
      id: 'entElder',
      name: 'Ent Elder',
      require: {
        3: {
          frey: 4,
        },
        4: {
          entElder: 4,
        }
      }
    },
    {
      id: 'headstriker',
      name: 'Headstriker',
      require: {
        3: {
          undomiel: 4,
        },
        4: {
          headstriker: 4,
        }
      }
    },
    {
      id: 'thale',
      name: 'Thale',
      require: {
        3: {
          forestsCaptain: 4,
        },
        4: {
          thale: 4,
        }
      }
    },
    {
      id: 'kargath',
      name: 'Kargath',
      require: {
        3: {
          undomiel: 4,
        },
        4: {
          kargath: 4,
        }
      }
    },
    {
      id: 'theGreyEyed',
      name: 'The Grey-eyed',
      require: {
        3: {
          frey: 4,
        },
        4: {
          theGreyEyed: 4,
        }
      }
    },
    {
      id: 'zekkis',
      name: 'Zekkis',
      require: {
        3: {
          blueShaman: 4,
        },
        4: {
          zekkis: 4,
        }
      }
    },
    {
      id: 'demonHunter',
      name: 'Demon Hunter',
      require: { }
    },
    {
      id: 'dragonSlayer',
      name: 'Dragon Slayer',
      require: { }
    },
    {
      id: 'faceless',
      name: 'Faceless',
      require: { }
    },
    {
      id: 'rosa',
      name: 'Rosa',
      require: { }
    },
    {
      id: 'starlight',
      name: 'Starlight',
      require: { }
    },
    {
      id: 'groo',
      name: 'Groo',
      require: { }
    },
    {
      id: 'eddga',
      name: 'Eddga',
      require: { }
    },
    {
      id: 'vesa',
      name: 'Vesa',
      require: { }
    },
    {
      id: 'malassa',
      name: 'Malassa',
      require: { }
    },
    {
      id: 'heartWatcher',
      name: 'Heart Watcher',
      require: { }
    },
    {
      id: 'valkyrie',
      name: 'Valkyrie',
      require: { }
    },
    {
      id: 'oberon',
      name: 'Oberon',
      require: { }
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
    {
      id: 'theGreyEyed',
      name: 'The Grey-eyed',
      require: {
        5: {
          theGreyEyed: 2,
          headstriker: 1,
        },
      }
    },
    {
      id: 'zekkis',
      name: 'Zekkis',
      require: {
        5: {
          zekkis: 2,
          thale: 1,
        },
      }
    },
    {
      id: 'demonHunter',
      name: 'Demon Hunter',
      require: {
        5: {
          demonHunter: 2,
          windWalker: 1,
        },
      }
    },
    {
      id: 'dragonSlayer',
      name: 'Dragon Slayer',
      require: {
        5: {
          dragonSlayer: 2,
          kargath: 1,
        },
      }
    },
    {
      id: 'faceless',
      name: 'Faceless',
      require: {
        5: {
          faceless: 2,
          headstriker: 1,
        },
      }
    },
    {
      id: 'rosa',
      name: 'Rosa',
      require: {
        5: {
          rosa: 2,
          zekkis: 1,
        },
      }
    },
    {
      id: 'starlight',
      name: 'Starlight',
      require: {
        5: {
          starlight: 2,
          thale: 1,
        },
      }
    },
    {
      id: 'groo',
      name: 'Groo',
      require: {
        5: {
          groo: 2,
          entElder: 1,
        },
      }
    },
    {
      id: 'eddga',
      name: 'Eddga',
      require: {
        5: {
          eddga: 2,
          chief: 1,
        },
      }
    },
    {
      id: 'vesa',
      name: 'Vesa',
      require: {
        5: {
          vesa: 2,
          thale: 1,
        },
      }
    },
    {
      id: 'malassa',
      name: 'Malassa',
      require: {
        5: {
          malassa: 2,
          kargath: 1,
        },
      }
    },
    {
      id: 'heartWatcher',
      name: 'Heart Watcher',
      require: {
        5: {
          heartWatcher: 2,
          theGreyEyed: 1,
        },
      }
    },
    {
      id: 'valkyrie',
      name: 'Valkyrie',
      require: {
        5: {
          valkyrie: 2,
          kargath: 1,
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
    {
      id: 'theGreyEyed',
      name: 'The Grey-eyed',
      require: {
        6: {
          theGreyEyed: 1,
        },
      }
    },
    {
      id: 'zekkis',
      name: 'Zekkis',
      require: {
        6: {
          zekkis: 1,
        },
      }
    },
    {
      id: 'demonHunter',
      name: 'Demon Hunter',
      require: {
        6: {
          demonHunter: 1,
        },
      }
    },
    {
      id: 'dragonSlayer',
      name: 'Dragon Slayer',
      require: {
        6: {
          dragonSlayer: 1,
        },
      }
    },
    {
      id: 'faceless',
      name: 'Faceless',
      require: {
        6: {
          faceless: 1,
        },
      }
    },
    {
      id: 'rosa',
      name: 'Rosa',
      require: {
        6: {
          rosa: 1,
        },
      }
    },
    {
      id: 'starlight',
      name: 'Starlight',
      require: {
        6: {
          starlight: 1,
        },
      }
    },
    {
      id: 'groo',
      name: 'Groo',
      require: {
        6: {
          groo: 1,
        },
      }
    },
    {
      id: 'eddga',
      name: 'Eddga',
      require: {
        6: {
          eddga: 1,
        },
      }
    },
    {
      id: 'vesa',
      name: 'Vesa',
      require: {
        6: {
          vesa: 1,
        },
      }
    },
    {
      id: 'malassa',
      name: 'Malassa',
      require: {
        6: {
          malassa: 1,
        },
      }
    },
    {
      id: 'heartWatcher',
      name: 'Heart Watcher',
      require: {
        6: {
          heartWatcher: 1,
        },
      }
    },
    {
      id: 'valkyrie',
      name: 'Valkyrie',
      require: {
        6: {
          valkyrie: 1,
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
    {
      id: 'theGreyEyed',
      name: 'The Grey-eyed',
      require: {
        7: {
          theGreyEyed: 1,
        },
      }
    },
    {
      id: 'zekkis',
      name: 'Zekkis',
      require: {
        7: {
          zekkis: 1,
        },
      }
    },
    {
      id: 'demonHunter',
      name: 'Demon Hunter',
      require: {
        7: {
          demonHunter: 1,
        },
      }
    },
    {
      id: 'dragonSlayer',
      name: 'Dragon Slayer',
      require: {
        7: {
          dragonSlayer: 1,
        },
      }
    },
    {
      id: 'faceless',
      name: 'Faceless',
      require: {
        7: {
          faceless: 1,
        },
      }
    },
    {
      id: 'rosa',
      name: 'Rosa',
      require: {
        7: {
          rosa: 1,
        },
      }
    },
    {
      id: 'starlight',
      name: 'Starlight',
      require: {
        7: {
          starlight: 1,
        },
      }
    },
    {
      id: 'groo',
      name: 'Groo',
      require: {
        7: {
          groo: 1,
        },
      }
    },
    {
      id: 'eddga',
      name: 'Eddga',
      require: {
        7: {
          eddga: 1,
        },
      }
    },
    {
      id: 'vesa',
      name: 'Vesa',
      require: {
        7: {
          vesa: 1,
        },
      }
    },
    {
      id: 'malassa',
      name: 'Malassa',
      require: {
        7: {
          malassa: 1,
        },
      }
    },
    {
      id: 'heartWatcher',
      name: 'Heart Watcher',
      require: {
        7: {
          heartWatcher: 1,
        },
      }
    },
    {
      id: 'valkyrie',
      name: 'Valkyrie',
      require: {
        7: {
          valkyrie: 1,
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
    {
      id: 'theGreyEyed',
      name: 'The Grey-eyed',
      require: {
        8: {
          theGreyEyed: 1,
        },
      }
    },
    {
      id: 'zekkis',
      name: 'Zekkis',
      require: {
        8: {
          zekkis: 1,
        },
      }
    },
    {
      id: 'demonHunter',
      name: 'Demon Hunter',
      require: {
        8: {
          demonHunter: 1,
        },
      }
    },
    {
      id: 'dragonSlayer',
      name: 'Dragon Slayer',
      require: {
        8: {
          dragonSlayer: 1,
        },
      }
    },
    {
      id: 'faceless',
      name: 'Faceless',
      require: {
        8: {
          faceless: 1,
        },
      }
    },
    {
      id: 'rosa',
      name: 'Rosa',
      require: {
        8: {
          rosa: 1,
        },
      }
    },
    {
      id: 'starlight',
      name: 'Starlight',
      require: {
        8: {
          starlight: 1,
        },
      }
    },
    {
      id: 'groo',
      name: 'Groo',
      require: {
        8: {
          groo: 1,
        },
      }
    },
    {
      id: 'eddga',
      name: 'Eddga',
      require: {
        8: {
          eddga: 1,
        },
      }
    },
    {
      id: 'vesa',
      name: 'Vesa',
      require: {
        8: {
          vesa: 1,
        },
      }
    },
    {
      id: 'malassa',
      name: 'Malassa',
      require: {
        8: {
          malassa: 1,
        },
      }
    },
    {
      id: 'heartWatcher',
      name: 'Heart Watcher',
      require: {
        8: {
          heartWatcher: 1,
        },
      }
    },
    {
      id: 'valkyrie',
      name: 'Valkyrie',
      require: {
        8: {
          valkyrie: 1,
        },
      }
    },
  ],
};

