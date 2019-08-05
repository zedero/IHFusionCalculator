// import {Settings} from './interfaces';
import * as FOREST from './herodata/forestHeroes';
import * as DARK from './herodata/darkHeroes';
import * as LIGHT from './herodata/lightHeroes';
import * as FORTRESS from './herodata/fortressHeroes';
import * as SHADOW from './herodata/shadowHeroes';
import * as ABYSS from './herodata/abyssHeroes';

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

export const TOTAL_5STAR_COPY_REQUIREMENT = {
  6: {
    fodder: 6,
    copies: 2,
  },
  7: {
    fodder: 10,
    copies: 2,
  },
  8: {
    fodder: 19,
    copies: 2,
  },
  9: {
    fodder: 28,
    copies: 3,
  },
  10: {
    fodder: 64,
    copies: 5,
  },
  11: {
    fodder: 93,
    copies: 6,
  },
  12: {
    fodder: 122,
    copies: 7,
  },
  13: {
    fodder: 186,
    copies: 7,
  },
};

export const FOREST_HEROES = FOREST.FOREST_HEROES;
export const FORTRESS_HEROES = FORTRESS.FORTRESS_HEROES;
export const SHADOW_HEROES = SHADOW.SHADOW_HEROES;
export const ABYSS_HEROES = ABYSS.ABYSS_HEROES;
export const DARK_HEROES = DARK.DARK_HEROES;
export const LIGHT_HEROES = LIGHT.LIGHT_HEROES;

// 6  = 2
// 9  = 1
// 10 = 2
// 11 = 1
// 12 = 1

