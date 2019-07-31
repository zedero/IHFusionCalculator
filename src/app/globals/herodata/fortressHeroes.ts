export const FORTRESS_HEROES = {
  3: [
    {
      id: 'reggie',
      name: 'Reggie',
      require: {}
    },
    {
      id: 'carver',
      name: 'Carver',
      require: {}
    },
    {
      id: 'tarasServant',
      name: 'Tara\'s Servant',
      require: {}
    },
    {
      id: 'fireFist',
      name: 'Fire Fist',
      require: {}
    },
    {
      id: 'mk03',
      name: 'MK-03',
      require: {}
    },
    ],
  4: [
    {
      id: 'timeMage',
      name: 'Time Mage',
      require: {}
    },
    {
      id: 'stormHudde',
      name: 'Storm Hudde',
      require: {}
    },
    {
      id: 'roy',
      name: 'Roy',
      require: {}
    },
    {
      id: 'sierra',
      name: 'Sierra',
      require: {}
    },
    {
      id: 'liquor',
      name: 'Liquor',
      require: {}
    },
    {
      id: 'lm02',
      name: 'LM-02',
      require: {}
    },
    {
      id: 'ironBambi',
      name: 'Iron Bambi',
      require: {}
    },
    {
      id: 'kristian',
      name: 'Kristian',
      require: {}
    },
  ],
  5: [
    {
      id: 'timeMage',
      name: 'Time Mage',
      require: {
        3: {
          reggie: 4,
        },
        4: {
          timeMage: 4,
        }
      }
    },
    {
      id: 'stormHudde',
      name: 'Storm Hudde',
      require: {
        3: {
          fireFist: 4,
        },
        4: {
          stormHudde: 4,
        }
      }
    },
    {
      id: 'roy',
      name: 'Roy',
      require: {
        3: {
          carver: 4,
        },
        4: {
          roy: 4,
        }
      }
    },
    {
      id: 'sierra',
      name: 'Sierra',
      require: {
        3: {
          reggie: 4,
        },
        4: {
          sierra: 4,
        }
      }
    },
    {
      id: 'liquor',
      name: 'Liquor',
      require: {
        3: {
          tarasServant: 4,
        },
        4: {
          liquor: 4,
        }
      }
    },
    {
      id: 'lm02',
      name: 'LM-02',
      require: {
        3: {
          mk03: 4,
        },
        4: {
          lm02: 4,
        }
      }
    },
    {
      id: 'ironBambi',
      name: 'Iron Bambi',
      require: {
        3: {
          fireFist: 4,
        },
        4: {
          ironBambi: 4,
        }
      }
    },
    {
      id: 'kristian',
      name: 'Kristian',
      require: {
        3: {
          carver: 4,
        },
        4: {
          kristian: 4,
        }
      }
    },
    {
      id: 'emily',
      name: 'Emily',
      require: {}
    },
    {
      id: 'ormus',
      name: 'Ormus',
      require: {}
    },
    {
      id: 'honorGuard',
      name: 'Honor Guard',
      require: {}
    },
    {
      id: 'flameStrike',
      name: 'Flame Strike',
      require: {}
    },
    {
      id: 'iceblink',
      name: 'Iceblink',
      require: {}
    },
    {
      id: 'bleecker',
      name: 'Bleecker',
      require: {}
    },
    {
      id: 'sigmund',
      name: 'Sigmund',
      require: {}
    },
    {
      id: 'mirage',
      name: 'Mirage',
      require: {}
    },
    {
      id: 'miki',
      name: 'Miki',
      require: {}
    },
    {
      id: 'od01',
      name: 'OD-01',
      require: {}
    },
    {
      id: 'valentino',
      name: 'Valentino',
      require: {}
    },
    {
      id: 'xia',
      name: 'Xia',
      require: {}
    },
    {
      id: 'penny',
      name: 'Penny',
      require: {}
    },
  ],
  6: [
    {
      id: 'roy',
      name: 'Roy',
      require: {
        5: {
          roy: 2,
          liquor: 1,
        },
      }
    },
    {
      id: 'sierra',
      name: 'Sierra',
      require: {
        5: {
          sierra: 2,
          kristian: 1,
        },
      }
    },
    {
      id: 'kristian',
      name: 'Kristian',
      require: {
        5: {
          kristian: 2,
          ironBambi: 1,
        },
      }
    },
    {
      id: 'emily',
      name: 'Emily',
      require: {
        5: {
          emily: 2,
          timeMage: 1,
        },
      }
    },
    {
      id: 'ormus',
      name: 'Ormus',
      require: {
        5: {
          ormus: 2,
          timeMage: 1,
        },
      }
    },
    {
      id: 'honorGuard',
      name: 'Honor Guard',
      require: {
        5: {
          honorGuard: 2,
          stormHudde: 1,
        },
      }
    },
    {
      id: 'flameStrike',
      name: 'Flame Strike',
      require: {
        5: {
          flameStrike: 2,
          sierra: 1,
        },
      }
    },
    {
      id: 'iceblink',
      name: 'Iceblink',
      require: {
        5: {
          iceblink: 2,
          kristian: 1,
        },
      }
    },
    {
      id: 'bleecker',
      name: 'Bleecker',
      require: {
        5: {
          bleecker: 2,
          liquor: 1,
        },
      }
    },
    {
      id: 'sigmund',
      name: 'Sigmund',
      require: {
        5: {
          sigmund: 2,
          ironBambi: 1,
        },
      }
    },
    {
      id: 'mirage',
      name: 'Mirage',
      require: {
        5: {
          mirage: 2,
          roy: 1,
        },
      }
    },
    {
      id: 'miki',
      name: 'Miki',
      require: {
        5: {
          miki: 2,
          roy: 1,
        },
      }
    },
    {
      id: 'od01',
      name: 'OD-01',
      require: {
        5: {
          od01: 2,
          lm02: 1,
        },
      }
    },
    {
      id: 'valentino',
      name: 'Valentino',
      require: {
        5: {
          valentino: 2,
          lm02: 1,
        },
      }
    },
    {
      id: 'xia',
      name: 'Xia',
      require: {
        5: {
          xia: 2,
          roy: 1,
        },
      }
    },
    {
      id: 'penny',
      name: 'Penny',
      require: {
        5: {
          penny: 2,
          liquor: 1,
        },
      }
    },
  ],
  7: [
    {
      id: 'roy',
      name: 'Roy',
      require: {
        6: {
          roy: 1,
        },
      }
    },
    {
      id: 'sierra',
      name: 'Sierra',
      require: {
        6: {
          sierra: 1,
        },
      }
    },
    {
      id: 'kristian',
      name: 'Kristian',
      require: {
        6: {
          kristian: 1,
        },
      }
    },
    {
      id: 'emily',
      name: 'Emily',
      require: {
        6: {
          emily: 1,
        },
      }
    },
    {
      id: 'ormus',
      name: 'Ormus',
      require: {
        6: {
          ormus: 1,
        },
      }
    },
    {
      id: 'honorGuard',
      name: 'Honor Guard',
      require: {
        6: {
          honorGuard: 1,
        },
      }
    },
    {
      id: 'flameStrike',
      name: 'Flame Strike',
      require: {
        6: {
          flameStrike: 1,
        },
      }
    },
    {
      id: 'iceblink',
      name: 'Iceblink',
      require: {
        6: {
          iceblink: 1,
        },
      }
    },
    {
      id: 'bleecker',
      name: 'Bleecker',
      require: {
        6: {
          bleecker: 1,
        },
      }
    },
    {
      id: 'sigmund',
      name: 'Sigmund',
      require: {
        6: {
          sigmund: 1,
        },
      }
    },
    {
      id: 'mirage',
      name: 'Mirage',
      require: {
        6: {
          mirage: 1,
        },
      }
    },
    {
      id: 'miki',
      name: 'Miki',
      require: {
        6: {
          miki: 1,
        },
      }
    },
    {
      id: 'od01',
      name: 'OD-01',
      require: {
        6: {
          od01: 1,
        },
      }
    },
    {
      id: 'valentino',
      name: 'Valentino',
      require: {
        6: {
          valentino: 1,
        },
      }
    },
    {
      id: 'xia',
      name: 'Xia',
      require: {
        6: {
          xia: 1,
        },
      }
    },
    {
      id: 'penny',
      name: 'Penny',
      require: {
        6: {
          penny: 1,
        },
      }
    },
  ],
  8: [
    {
      id: 'roy',
      name: 'Roy',
      require: {
        7: {
          roy: 1,
        },
      }
    },
    {
      id: 'sierra',
      name: 'Sierra',
      require: {
        7: {
          sierra: 1,
        },
      }
    },
    {
      id: 'kristian',
      name: 'Kristian',
      require: {
        7: {
          kristian: 1,
        },
      }
    },
    {
      id: 'emily',
      name: 'Emily',
      require: {
        7: {
          emily: 1,
        },
      }
    },
    {
      id: 'ormus',
      name: 'Ormus',
      require: {
        7: {
          ormus: 1,
        },
      }
    },
    {
      id: 'honorGuard',
      name: 'Honor Guard',
      require: {
        7: {
          honorGuard: 1,
        },
      }
    },
    {
      id: 'flameStrike',
      name: 'Flame Strike',
      require: {
        7: {
          flameStrike: 1,
        },
      }
    },
    {
      id: 'iceblink',
      name: 'Iceblink',
      require: {
        7: {
          iceblink: 1,
        },
      }
    },
    {
      id: 'bleecker',
      name: 'Bleecker',
      require: {
        7: {
          bleecker: 1,
        },
      }
    },
    {
      id: 'sigmund',
      name: 'Sigmund',
      require: {
        7: {
          sigmund: 1,
        },
      }
    },
    {
      id: 'mirage',
      name: 'Mirage',
      require: {
        7: {
          mirage: 1,
        },
      }
    },
    {
      id: 'miki',
      name: 'Miki',
      require: {
        7: {
          miki: 1,
        },
      }
    },
    {
      id: 'od01',
      name: 'OD-01',
      require: {
        7: {
          od01: 1,
        },
      }
    },
    {
      id: 'valentino',
      name: 'Valentino',
      require: {
        7: {
          valentino: 1,
        },
      }
    },
    {
      id: 'xia',
      name: 'Xia',
      require: {
        7: {
          xia: 1,
        },
      }
    },
    {
      id: 'penny',
      name: 'Penny',
      require: {
        7: {
          penny: 1,
        },
      }
    },
  ],
  9: [
    {
      id: 'roy',
      name: 'Roy',
      require: {
        5: {
          roy: 1,
        },
        8: {
          roy: 1,
        },
      }
    },
    {
      id: 'sierra',
      name: 'Sierra',
      require: {
        5: {
          sierra: 1,
        },
        8: {
          sierra: 1,
        },
      }
    },
    {
      id: 'kristian',
      name: 'Kristian',
      require: {
        5: {
          kristian: 1,
        },
        8: {
          kristian: 1,
        },
      }
    },
    {
      id: 'emily',
      name: 'Emily',
      require: {
        5: {
          emily: 1,
        },
        8: {
          emily: 1,
        },
      }
    },
    {
      id: 'ormus',
      name: 'Ormus',
      require: {
        5: {
          ormus: 1,
        },
        8: {
          ormus: 1,
        },
      }
    },
    {
      id: 'honorGuard',
      name: 'Honor Guard',
      require: {
        5: {
          honorGuard: 1,
        },
        8: {
          honorGuard: 1,
        },
      }
    },
    {
      id: 'flameStrike',
      name: 'Flame Strike',
      require: {
        5: {
          flameStrike: 1,
        },
        8: {
          flameStrike: 1,
        },
      }
    },
    {
      id: 'iceblink',
      name: 'Iceblink',
      require: {
        5: {
          iceblink: 1,
        },
        8: {
          iceblink: 1,
        },
      }
    },
    {
      id: 'bleecker',
      name: 'Bleecker',
      require: {
        5: {
          bleecker: 1,
        },
        8: {
          bleecker: 1,
        },
      }
    },
    {
      id: 'sigmund',
      name: 'Sigmund',
      require: {
        5: {
          sigmund: 1,
        },
        8: {
          sigmund: 1,
        },
      }
    },
    {
      id: 'mirage',
      name: 'Mirage',
      require: {
        5: {
          mirage: 1,
        },
        8: {
          mirage: 1,
        },
      }
    },
    {
      id: 'miki',
      name: 'Miki',
      require: {
        5: {
          miki: 1,
        },
        8: {
          miki: 1,
        },
      }
    },
    {
      id: 'od01',
      name: 'OD-01',
      require: {
        5: {
          od01: 1,
        },
        8: {
          od01: 1,
        },
      }
    },
    {
      id: 'valentino',
      name: 'Valentino',
      require: {
        5: {
          valentino: 1,
        },
        8: {
          valentino: 1,
        },
      }
    },
    {
      id: 'xia',
      name: 'Xia',
      require: {
        5: {
          xia: 1,
        },
        8: {
          xia: 1,
        },
      }
    },
    {
      id: 'penny',
      name: 'Penny',
      require: {
        5: {
          penny: 1,
        },
        8: {
          penny: 1,
        },
      }
    },
  ],
};

