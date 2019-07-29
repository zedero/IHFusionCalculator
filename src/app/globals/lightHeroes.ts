export const LIGHT_HEROES = {
  3: [
    {
      id: 'holyKid',
      name: 'Holy Kid',
      require: {}
    },
    ],
  4: [
    {
      id: 'disciple',
      name: 'Disciple',
      require: {}
    },
    {
      id: 'fegan',
      name: 'Fegan',
      require: {}
    },
    {
      id: 'divineSpirit',
      name: 'Divine Spirit',
      require: {}
    },
  ],
  5: [
    {
      id: 'disciple',
      name: 'Disciple',
      require: {
        3: {
          holyKid: 4,
        },
        4: {
          disciple: 4,
        }
      }
    },
    {
      id: 'fegan',
      name: 'Fegan',
      require: {
        3: {
          holyKid: 4,
        },
        4: {
          fegan: 4,
        }
      }
    },
    {
      id: 'divineSpirit',
      name: 'Divine Spirit',
      require: {
        3: {
          holyKid: 4,
        },
        4: {
          divineSpirit: 4,
        }
      }
    },
    {
      id: 'gerke',
      name: 'Gerke',
      require: {}
    },
    {
      id: 'asmodel',
      name: 'Asmodel',
      require: {}
    },
    {
      id: 'michelle',
      name: 'Michelle',
      require: {}
    },
    {
      id: 'faithBlade',
      name: 'Faith Blade',
      require: {}
    },
    {
      id: 'belrain',
      name: 'Belrain',
      require: {}
    },
    {
      id: 'aida',
      name: 'Aida',
      require: {}
    },
  ],
  6: [
    {
      id: 'divineSpirit',
      name: 'Divine Spirit',
      require: {
        5: {
          divineSpirit: 2,
          disciple: 1,
        },
      }
    },
    {
      id: 'gerke',
      name: 'Gerke',
      require: {
        5: {
          gerke: 2,
          disciple: 1,
        },
      }
    },
    {
      id: 'asmodel',
      name: 'Asmodel',
      require: {
        5: {
          asmodel: 2,
          fegan: 1,
        },
      }
    },
    {
      id: 'michelle',
      name: 'Michelle',
      require: {
        5: {
          michelle: 2,
          disciple: 1,
        },
      }
    },
    {
      id: 'faithBlade',
      name: 'Faith Blade',
      require: {
        5: {
          faithBlade: 2,
          fegan: 1,
        },
      }
    },
    {
      id: 'belrain',
      name: 'Belrain',
      require: {
        5: {
          belrain: 2,
          disciple: 1,
        },
      }
    },
    {
      id: 'aida',
      name: 'Aida',
      require: {
        5: {
          aida: 2,
          disciple: 1,
        },
      }
    },
  ],
  7: [
    {
      id: 'divineSpirit',
      name: 'Divine Spirit',
      require: {
        6: {
          divineSpirit: 1,
        },
      }
    },
    {
      id: 'gerke',
      name: 'Gerke',
      require: {
        6: {
          gerke: 1,
        },
      }
    },
    {
      id: 'asmodel',
      name: 'Asmodel',
      require: {
        6: {
          asmodel: 1,
        },
      }
    },
    {
      id: 'michelle',
      name: 'Michelle',
      require: {
        6: {
          michelle: 1,
        },
      }
    },
    {
      id: 'faithBlade',
      name: 'Faith Blade',
      require: {
        6: {
          faithBlade: 1,
        },
      }
    },
    {
      id: 'belrain',
      name: 'Belrain',
      require: {
        6: {
          belrain: 1,
        },
      }
    },
    {
      id: 'aida',
      name: 'Aida',
      require: {
        6: {
          aida: 1,
        },
      }
    },
  ],
  8: [
    {
      id: 'divineSpirit',
      name: 'Divine Spirit',
      require: {
        7: {
          divineSpirit: 1,
        },
      }
    },
    {
      id: 'gerke',
      name: 'Gerke',
      require: {
        7: {
          gerke: 1,
        },
      }
    },
    {
      id: 'asmodel',
      name: 'Asmodel',
      require: {
        7: {
          asmodel: 1,
        },
      }
    },
    {
      id: 'michelle',
      name: 'Michelle',
      require: {
        7: {
          michelle: 1,
        },
      }
    },
    {
      id: 'faithBlade',
      name: 'Faith Blade',
      require: {
        7: {
          faithBlade: 1,
        },
      }
    },
    {
      id: 'belrain',
      name: 'Belrain',
      require: {
        7: {
          belrain: 1,
        },
      }
    },
    {
      id: 'aida',
      name: 'Aida',
      require: {
        7: {
          aida: 1,
        },
      }
    },
  ],
  9: [
    {
      id: 'divineSpirit',
      name: 'Divine Spirit',
      require: {
        5: {
          divineSpirit: 1,
        },
        8: {
          divineSpirit: 1,
        },
      }
    },
    {
      id: 'gerke',
      name: 'Gerke',
      require: {
        5: {
          gerke: 1,
        },
        8: {
          gerke: 1,
        },
      }
    },
    {
      id: 'asmodel',
      name: 'Asmodel',
      require: {
        5: {
          asmodel: 1,
        },
        8: {
          asmodel: 1,
        },
      }
    },
    {
      id: 'michelle',
      name: 'Michelle',
      require: {
        5: {
          michelle: 1,
        },
        8: {
          michelle: 1,
        },
      }
    },
    {
      id: 'faithBlade',
      name: 'Faith Blade',
      require: {
        5: {
          faithBlade: 1,
        },
        8: {
          faithBlade: 1,
        },
      }
    },
    {
      id: 'belrain',
      name: 'Belrain',
      require: {
        5: {
          belrain: 1,
        },
        8: {
          belrain: 1,
        },
      }
    },
    {
      id: 'aida',
      name: 'Aida',
      require: {
        5: {
          aida: 1,
        },
        8: {
          aida: 1,
        },
      }
    },
  ],
};

