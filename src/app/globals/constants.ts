// import {Settings} from './interfaces';
import * as FOREST from './forestHeroes';
import * as DARK from './darkHeroes';
import * as LIGHT from './lightHeroes';

/**
 * Level 5:  4 copy(4*) + 4 Other(3*)  4 Fodder(4*)
 * Level 6:  2 Copy(5*) + 1 Other(5*) + 3 Fodder(5*)
 * Level 7:  4 Fodder(5*)
 * Level 8:  1 Fodder(6*) + 3 Fodder(5*)
 * Level 9:  1 Copy + 1 Fodder(6*) + 2 Fodder(5*)
 * Level 10: 2 Copy + 1 Fodder(6*) + 1 Fodder(9*)
 * Level 11: 1 Copy + 1 Fodder(9*)
 * Level 12: 1 Copy + 1 Fodder(9*)
 * Level 13: 1 Fodder(10*)
 */

export const FODDER_REQUIREMENT = {
  5: {
    4: 4,
  },
  6: {
    5: 3,
  },
  7: {
    5: 4,
  },
  8: {
    5: 3,
    6: 1,
  },
  9: {
    5: 2,
    6: 1,
  },
  10: {
    6: 1,
    9: 1,
  },
  11: {
    9: 1,
  },
  12: {
    9: 1,
  },
  13: {
    10: 1,
  },
};

export const TOTAL_HERO_REQUIREMENT = {
  5: {
    3: 4,
    4: 8,
  },
  6: {
    5: 6,
  },
  7: {
    5: 4,
  },
  8: {
    5: 3,
    6: 1,
  },
  9: {
    5: 2,
    6: 1,
  },
  10: {
    6: 1,
    9: 1,
  },
  11: {
    9: 1,
  },
  12: {
    9: 1,
  },
  13: {
    10: 1,
  },
};

export const FOREST_HEROES = FOREST.FOREST_HEROES;
export const FORTRESS_HEROES = {};
export const SHADOW_HEROES = {};
export const ABYSS_HEROES = {};
export const DARK_HEROES = DARK.DARK_HEROES;
export const LIGHT_HEROES = LIGHT.LIGHT_HEROES;
