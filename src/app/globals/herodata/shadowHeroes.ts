export const SHADOW_HEROES = {
  3: [
    {
      id: 'chainHammer',
      name: 'Chain Hammer',
      require: {}
    },
    {
      id: 'poisonTongue',
      name: 'Poison Tongue',
      require: {}
    },
    {
      id: 'shirley',
      name: 'Shirley',
      require: {}
    },
    {
      id: 'darkPriest',
      name: 'Dark Priest',
      require: {}
    },
    {
      id: 'iceTroll',
      name: 'Ice Troll',
      require: {}
    },
    ],
  4: [
    {
      id: 'grumpyCorpse',
      name: 'Grumpy Corpse',
      require: {}
    },
    {
      id: 'gbagbo',
      name: 'Gbagbo',
      require: {}
    },
    {
      id: 'bonecarver',
      name: 'Bonecarver',
      require: {}
    },
    {
      id: 'glen',
      name: 'Glen',
      require: {}
    },
    {
      id: 'nightmareKnight',
      name: 'Nightmare Knight',
      require: {}
    },
    {
      id: 'boneGeneral',
      name: 'Bone General',
      require: {}
    },
    {
      id: 'lamb',
      name: 'Lamb',
      require: {}
    },
    {
      id: 'deathsworn',
      name: 'Deathsworn',
      require: {}
    },
  ],
  5: [
    {
      id: 'grumpyCorpse',
      name: 'Grumpy Corpse',
      require: {
        3: {
          iceTroll: 4,
        },
        4: {
          grumpyCorpse: 4,
        }
      }
    },
    {
      id: 'gbagbo',
      name: 'Gbagbo',
      require: {
        3: {
          poisonTongue: 4,
        },
        4: {
          gbagbo: 4,
        }
      }
    },
    {
      id: 'bonecarver',
      name: 'Bonecarver',
      require: {
        3: {
          shirley: 4,
        },
        4: {
          bonecarver: 4,
        }
      }
    },
    {
      id: 'glen',
      name: 'Glen',
      require: {
        3: {
          darkPriest: 4,
        },
        4: {
          glen: 4,
        }
      }
    },
    {
      id: 'nightmareKnight',
      name: 'Nightmare Knight',
      require: {
        3: {
          iceTroll: 4,
        },
        4: {
          nightmareKnight: 4,
        }
      }
    },
    {
      id: 'boneGeneral',
      name: 'Bone General',
      require: {
        3: {
          chainHammer: 4,
        },
        4: {
          boneGeneral: 4,
        }
      }
    },
    {
      id: 'lamb',
      name: 'Lamb',
      require: {
        3: {
          chainHammer: 4,
        },
        4: {
          lamb: 4,
        }
      }
    },
    {
      id: 'deathsworn',
      name: 'Deathsworn',
      require: {
        3: {
          shirley: 4,
        },
        4: {
          deathsworn: 4,
        }
      }
    },
    {
      id: 'kharma',
      name: 'Kharma',
      require: {}
    },
    {
      id: 'bloodBlade',
      name: 'Blood Blade',
      require: {}
    },
    {
      id: 'dominator',
      name: 'Dominator',
      require: {}
    },
    {
      id: 'lutz',
      name: 'Lutz',
      require: {}
    },
    {
      id: 'field',
      name: 'Field',
      require: {}
    },
    {
      id: 'corpsedemon',
      name: 'Corpsedemon',
      require: {}
    },
    {
      id: 'baade',
      name: 'Baade',
      require: {}
    },
    {
      id: 'kamath',
      name: 'Kamath',
      require: {}
    },
    {
      id: 'aidan',
      name: 'Aidan',
      require: {}
    },
    {
      id: 'walter',
      name: 'Walter',
      require: {}
    },
    {
      id: 'jahra',
      name: 'Jahra',
      require: {}
    },
    {
      id: 'horus',
      name: 'Horus',
      require: {}
    },
  ],
  6: [
    {
      id: 'bonecarver',
      name: 'Bonecarver',
      require: {
        5: {
          bonecarver: 2,
          gbagbo: 1,
        },
      }
    },
    {
      id: 'glen',
      name: 'Glen',
      require: {
        5: {
          glen: 2,
          deathsworn: 1,
        },
      }
    },
    {
      id: 'deathsworn',
      name: 'Deathsworn',
      require: {
        5: {
          deathsworn: 2,
          glen: 1,
        },
      }
    },
    {
      id: 'kharma',
      name: 'Kharma',
      require: {
        5: {
          kharma: 2,
          glen: 1,
        },
      }
    },
    {
      id: 'bloodBlade',
      name: 'Blood Blade',
      require: {
        5: {
          bloodBlade: 2,
          bonecarver: 1,
        },
      }
    },
    {
      id: 'dominator',
      name: 'Dominator',
      require: {
        5: {
          dominator: 2,
          boneGeneral: 1,
        },
      }
    },
    {
      id: 'lutz',
      name: 'Lutz',
      require: {
        5: {
          lutz: 2,
          gbagbo: 1,
        },
      }
    },
    {
      id: 'field',
      name: 'Field',
      require: {
        5: {
          field: 2,
          lamb: 1,
        },
      }
    },
    {
      id: 'corpsedemon',
      name: 'Corpsedemon',
      require: {
        5: {
          corpsedemon: 2,
          grumpyCorpse: 1,
        },
      }
    },
    {
      id: 'baade',
      name: 'Baade',
      require: {
        5: {
          baade: 2,
          nightmareKnight: 1,
        },
      }
    },
    {
      id: 'kamath',
      name: 'Kamath',
      require: {
        5: {
          kamath: 2,
          grumpyCorpse: 1,
        },
      }
    },
    {
      id: 'aidan',
      name: 'Aidan',
      require: {
        5: {
          aidan: 2,
          deathsworn: 1,
        },
      }
    },
    {
      id: 'walter',
      name: 'Walter',
      require: {
        5: {
          walter: 2,
          bonecarver: 1,
        },
      }
    },
    {
      id: 'jahra',
      name: 'Jahra',
      require: {
        5: {
          jahra: 2,
          lamb: 1,
        },
      }
    },
    {
      id: 'horus',
      name: 'Horus',
      require: {
        5: {
          horus: 2,
          grumpyCorpse: 1,
        },
      }
    },
  ],
  7: [
    {
      id: 'bonecarver',
      name: 'Bonecarver',
      require: {
        6: {
          bonecarver: 1,
        },
      }
    },
    {
      id: 'glen',
      name: 'Glen',
      require: {
        6: {
          glen: 1,
        },
      }
    },
    {
      id: 'deathsworn',
      name: 'Deathsworn',
      require: {
        6: {
          deathsworn: 1,
        },
      }
    },
    {
      id: 'kharma',
      name: 'Kharma',
      require: {
        6: {
          kharma: 1,
        },
      }
    },
    {
      id: 'bloodBlade',
      name: 'Blood Blade',
      require: {
        6: {
          bloodBlade: 1,
        },
      }
    },
    {
      id: 'dominator',
      name: 'Dominator',
      require: {
        6: {
          dominator: 1,
        },
      }
    },
    {
      id: 'lutz',
      name: 'Lutz',
      require: {
        6: {
          lutz: 1,
        },
      }
    },
    {
      id: 'field',
      name: 'Field',
      require: {
        6: {
          field: 1,
        },
      }
    },
    {
      id: 'corpsedemon',
      name: 'Corpsedemon',
      require: {
        6: {
          corpsedemon: 1,
        },
      }
    },
    {
      id: 'baade',
      name: 'Baade',
      require: {
        6: {
          baade: 1,
        },
      }
    },
    {
      id: 'kamath',
      name: 'Kamath',
      require: {
        6: {
          kamath: 1,
        },
      }
    },
    {
      id: 'aidan',
      name: 'Aidan',
      require: {
        6: {
          aidan: 1,
        },
      }
    },
    {
      id: 'walter',
      name: 'Walter',
      require: {
        6: {
          walter: 1,
        },
      }
    },
    {
      id: 'jahra',
      name: 'Jahra',
      require: {
        6: {
          jahra: 1,
        },
      }
    },
    {
      id: 'horus',
      name: 'Horus',
      require: {
        6: {
          horus: 1,
        },
      }
    },
  ],
  8: [
    {
      id: 'bonecarver',
      name: 'Bonecarver',
      require: {
        7: {
          bonecarver: 1,
        },
      }
    },
    {
      id: 'glen',
      name: 'Glen',
      require: {
        7: {
          glen: 1,
        },
      }
    },
    {
      id: 'deathsworn',
      name: 'Deathsworn',
      require: {
        7: {
          deathsworn: 1,
        },
      }
    },
    {
      id: 'kharma',
      name: 'Kharma',
      require: {
        7: {
          kharma: 1,
        },
      }
    },
    {
      id: 'bloodBlade',
      name: 'Blood Blade',
      require: {
        7: {
          bloodBlade: 1,
        },
      }
    },
    {
      id: 'dominator',
      name: 'Dominator',
      require: {
        7: {
          dominator: 1,
        },
      }
    },
    {
      id: 'lutz',
      name: 'Lutz',
      require: {
        7: {
          lutz: 1,
        },
      }
    },
    {
      id: 'field',
      name: 'Field',
      require: {
        7: {
          field: 1,
        },
      }
    },
    {
      id: 'corpsedemon',
      name: 'Corpsedemon',
      require: {
        7: {
          corpsedemon: 1,
        },
      }
    },
    {
      id: 'baade',
      name: 'Baade',
      require: {
        7: {
          baade: 1,
        },
      }
    },
    {
      id: 'kamath',
      name: 'Kamath',
      require: {
        7: {
          kamath: 1,
        },
      }
    },
    {
      id: 'aidan',
      name: 'Aidan',
      require: {
        7: {
          aidan: 1,
        },
      }
    },
    {
      id: 'walter',
      name: 'Walter',
      require: {
        7: {
          walter: 1,
        },
      }
    },
    {
      id: 'jahra',
      name: 'Jahra',
      require: {
        7: {
          jahra: 1,
        },
      }
    },
    {
      id: 'horus',
      name: 'Horus',
      require: {
        7: {
          horus: 1,
        },
      }
    },
  ],
  9: [
    {
      id: 'bonecarver',
      name: 'Bonecarver',
      require: {
        5: {
          bonecarver: 1,
        },
        8: {
          bonecarver: 1,
        },
      }
    },
    {
      id: 'glen',
      name: 'Glen',
      require: {
        5: {
          glen: 1,
        },
        8: {
          glen: 1,
        },
      }
    },
    {
      id: 'deathsworn',
      name: 'Deathsworn',
      require: {
        5: {
          deathsworn: 1,
        },
        8: {
          deathsworn: 1,
        },
      }
    },
    {
      id: 'kharma',
      name: 'Kharma',
      require: {
        5: {
          kharma: 1,
        },
        8: {
          kharma: 1,
        },
      }
    },
    {
      id: 'bloodBlade',
      name: 'Blood Blade',
      require: {
        5: {
          bloodBlade: 1,
        },
        8: {
          bloodBlade: 1,
        },
      }
    },
    {
      id: 'dominator',
      name: 'Dominator',
      require: {
        5: {
          dominator: 1,
        },
        8: {
          dominator: 1,
        },
      }
    },
    {
      id: 'lutz',
      name: 'Lutz',
      require: {
        5: {
          lutz: 1,
        },
        8: {
          lutz: 1,
        },
      }
    },
    {
      id: 'field',
      name: 'Field',
      require: {
        5: {
          field: 1,
        },
        8: {
          field: 1,
        },
      }
    },
    {
      id: 'corpsedemon',
      name: 'Corpsedemon',
      require: {
        5: {
          corpsedemon: 1,
        },
        8: {
          corpsedemon: 1,
        },
      }
    },
    {
      id: 'baade',
      name: 'Baade',
      require: {
        5: {
          baade: 1,
        },
        8: {
          baade: 1,
        },
      }
    },
    {
      id: 'kamath',
      name: 'Kamath',
      require: {
        5: {
          kamath: 1,
        },
        8: {
          kamath: 1,
        },
      }
    },
    {
      id: 'aidan',
      name: 'Aidan',
      require: {
        5: {
          aidan: 1,
        },
        8: {
          aidan: 1,
        },
      }
    },
    {
      id: 'walter',
      name: 'Walter',
      require: {
        5: {
          walter: 1,
        },
        8: {
          walter: 1,
        },
      }
    },
    {
      id: 'jahra',
      name: 'Jahra',
      require: {
        5: {
          jahra: 1,
        },
        8: {
          jahra: 1,
        },
      }
    },
    {
      id: 'horus',
      name: 'Horus',
      require: {
        5: {
          horus: 1,
        },
        8: {
          horus: 1,
        },
      }
    },
  ],
};

