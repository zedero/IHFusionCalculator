import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Helper } from '../utilities/helper';
import * as Constants from '../globals/Constants';
import { retry } from 'rxjs/operators';

declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class OwnedService implements OnDestroy {

  private saveNameSpace = 'IHCalc';
  private saveName = this.saveNameSpace + 'SaveData';
  private saveBagName = this.saveNameSpace + 'Bagdata';
  private saveRosterName = this.saveNameSpace + 'Rosterdata';

  private manualSaveNameSpace = 'IHCalcManual';
  private manualSaveName = this.manualSaveNameSpace + 'SaveData';
  private manualSaveBagName = this.manualSaveNameSpace + 'Bagdata';
  private manualSaveRosterName = this.manualSaveNameSpace + 'Rosterdata';

  public ownedHeroes = {};
  public tempOwnedHeroes = {};
  public ownedHeroesBag = {};
  public ownedHeroesRoster = {};

  public ownedOffset;

  public changed: Subject<any>;
  public helper = new Helper();

  public usedHeroes;

  private heroesPerFaction = {};

  constructor() {
    this.changed = new Subject();
    this.resetOwnedOffset();
    this.load();

    this.generateHeroesPerFaction();

    window.Game = this;
  }

  public generateHeroesPerFaction() {
    const generate = (faction, data) => {
      const heroes = new Set();
      Object.keys(data).forEach((stars) => {
        Object.values(data[stars]).forEach((hero: any) => {
          heroes.add(hero.id);
        });
      });
      this.heroesPerFaction[faction] = heroes;
    };
    generate('forest', Constants.FOREST_HEROES);
    generate('dark', Constants.DARK_HEROES);
    generate('light', Constants.LIGHT_HEROES);
    generate('fortress', Constants.FORTRESS_HEROES);
    generate('shadow', Constants.SHADOW_HEROES);
    generate('abyss', Constants.ABYSS_HEROES);
  }

  public getFactionFromHeroId(id) {
    let faction;
    Object.entries(this.heroesPerFaction).forEach((data: any) => {
      const factionData: Set<any> = data[1];
      if (factionData.has(id)) {
        faction = data[0];
      }
    });
    return faction;
  }

  public resetOwnedOffset() {
    const offset = () => {
      return this.helper.deepCopyObject({
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
      });
    };
    this.ownedOffset = {
      forest: offset(),
      fortress: offset(),
      shadow: offset(),
      abyss: offset(),
      dark: offset(),
      light: offset(),
    };

    this.usedHeroes = {};
  }

  public setHeroAmount(id, amount, stars) {
    if (!this.ownedHeroes[stars]) {
      this.ownedHeroes[stars] = {};
    }
    this.ownedHeroes[stars][id] = amount;

    this.save();
  }

  public getTempHeroAmount(id, stars) {
    return this.getAmountOfObject(id, stars, this.tempOwnedHeroes);
  }

  public getHeroAmount(id, stars) {
    return this.getAmountOfObject(id, stars, this.ownedHeroes);
  }

  public getHeroBagAmount(id, stars) {
    return this.getAmountOfObject(id, stars, this.ownedHeroesBag);
  }

  public getHeroRosterAmount(id, stars) {
    return this.getAmountOfObject(id, stars, this.ownedHeroesRoster);
  }

  public getAmountOfObject(id, stars, objectData) {
    if (!objectData[stars] || !objectData[stars][id]) {
      return 0;
    }
    return objectData[stars][id];
  }

  public setTempHeroAmount(id, amount, stars) {
    if (!this.tempOwnedHeroes[stars]) {
      this.tempOwnedHeroes[stars] = {};
    }
    this.tempOwnedHeroes[stars][id] = amount;
    this.changed.next();
  }

  public setHeroBagAmount(id, amount, stars) {
    if (!this.ownedHeroesBag[stars]) {
      this.ownedHeroesBag[stars] = {};
    }
    this.ownedHeroesBag[stars][id] = amount;
    this.save();
  }

  public setHeroRosterAmount(id, amount, stars) {
    if (!this.ownedHeroesRoster[stars]) {
      this.ownedHeroesRoster[stars] = {};
    }
    this.ownedHeroesRoster[stars][id] = amount;
    this.save();
  }


  public save() {
    localStorage.setItem(this.saveName, JSON.stringify(this.ownedHeroes));
    localStorage.setItem(this.saveBagName, JSON.stringify(this.ownedHeroesBag));
    localStorage.setItem(this.saveRosterName, JSON.stringify(this.ownedHeroesRoster));
    this.tempOwnedHeroes = this.helper.deepCopyObject(this.ownedHeroes);
    this.changed.next();
  }

  public manualSave() {
    localStorage.setItem(this.manualSaveName, JSON.stringify(this.ownedHeroes));
    localStorage.setItem(this.manualSaveBagName, JSON.stringify(this.ownedHeroesBag));
    localStorage.setItem(this.manualSaveRosterName, JSON.stringify(this.ownedHeroesRoster));
  }

  public load() {
    this.ownedHeroes = JSON.parse(localStorage.getItem(this.saveName));
    if (!this.ownedHeroes) {
      this.ownedHeroes = {};
    }

    this.ownedHeroesBag = JSON.parse(localStorage.getItem(this.saveBagName));
    if (!this.ownedHeroesBag) {
      this.ownedHeroesBag = {};
    }

    this.ownedHeroesRoster = JSON.parse(localStorage.getItem(this.saveRosterName));
    if (!this.ownedHeroesRoster) {
      this.ownedHeroesRoster = {};
    }

    this.tempOwnedHeroes = this.helper.deepCopyObject(this.ownedHeroes);
    this.resetOwnedOffset();
    this.changed.next();
  }

  public manualLoad() {
    this.ownedHeroes = JSON.parse(localStorage.getItem(this.manualSaveName));
    if (!this.ownedHeroes) {
      this.ownedHeroes = {};
    }

    this.ownedHeroesBag = JSON.parse(localStorage.getItem(this.manualSaveBagName));
    if (!this.ownedHeroesBag) {
      this.ownedHeroesBag = {};
    }

    this.ownedHeroesRoster = JSON.parse(localStorage.getItem(this.manualSaveRosterName));
    if (!this.ownedHeroesRoster) {
      this.ownedHeroesRoster = {};
    }

    this.tempOwnedHeroes = this.helper.deepCopyObject(this.ownedHeroes);
    this.resetOwnedOffset();
    this.changed.next();
  }

  public calculateTotalFodder(stars, faction) {
    if (!stars) {
      return 0;
    }
    if (!faction) {
      return 0;
    }
    if (!this.tempOwnedHeroes || !this.tempOwnedHeroes[stars]) {
      return 0;
    }

    const temp = this.helper.deepCopyObject(this.tempOwnedHeroes[stars]);
    let amount = 0;

    Object.keys(temp).forEach((hero) => {
      if (!this.heroesPerFaction[faction]) {
        console.warn('Faction not generated');
        return 0;
      }
      if (this.heroesPerFaction[faction].has(hero)) {
        amount += temp[hero];
      }
    });

    return amount;


    // return Object.values(this.tempOwnedHeroes[stars]).reduce((a: number, b: number) => a + b, 0);
  }

  public log(requirement, fodder, fused) {
    if (!this.usedHeroes.fused) {
      this.usedHeroes.fused = [];
    }
    this.usedHeroes.fused.push(fused);

    if (!this.usedHeroes.fodder) {
      this.usedHeroes.fodder = fodder;
    } else {
      Object.entries(fodder).forEach((hero) => {
        const stars = hero[0];
        const amount = hero[1];
        if (this.usedHeroes.fodder[stars]) {
          this.usedHeroes.fodder[stars] += amount;
        } else {
          this.usedHeroes.fodder[stars] = amount;
        }
      });
    }


    if (!this.usedHeroes.copies) {
      this.usedHeroes.copies = requirement;
    } else {
      Object.entries(requirement).forEach((reqGroup) => {
        const stars = reqGroup[0];
        const heroes = reqGroup[1];
        if (!this.usedHeroes.copies[stars]) {
          this.usedHeroes.copies[stars] = {};
        }
        Object.entries(heroes).forEach((hero) => {
          const id = hero[0];
          const amount = hero[1];
          if (this.usedHeroes.copies[stars][id]) {
            this.usedHeroes.copies[stars][id] += amount;
          } else {
            this.usedHeroes.copies[stars][id] = amount;
          }
        });
      });
    }
  }

  public clear(faction) {
    this.deleteFactionFromObject(this.ownedHeroes, faction);
    this.deleteFactionFromObject(this.tempOwnedHeroes, faction);
    this.deleteFactionFromObject(this.ownedHeroesBag, faction);
    this.deleteFactionFromObject(this.ownedHeroesRoster, faction);
    this.changed.next();
  }

  private deleteFactionFromObject(object, faction) {
    Object.entries(object).forEach((objectData) => {
      const stars = objectData[0];
      const data = objectData[1];
      Object.keys(data).forEach(hero => {
        if (this.heroesPerFaction[faction].has(hero)) {
          delete object[stars][hero];
        }
      });
    });
  }

  public clearAll() {
    this.ownedHeroes = {};
    this.tempOwnedHeroes = {};
    this.ownedHeroesBag = {};
    this.ownedHeroesRoster = {};
    this.changed.next();
  }

  ngOnDestroy() {
    this.changed.unsubscribe();
  }

  public get5StarFusionAmount(faction) {
    let fused = 0;
    const owned = this.helper.deepCopyObject(this.tempOwnedHeroes);
    const owned3star = [];
    const owned4star = [];
    let owned3starRemainder = 0;
    let owned4starRemainder = 0;

    Object.entries(owned[3]).forEach((data: any) => {
      if (!this.heroesPerFaction[faction].has(data[0])) {return; }
      if (data[1] / 4 >= 1) {
        owned3star.push([data[0], Math.floor(data[1] / 4)]);
        owned3starRemainder += data[1] % 4;
      }
    });
    Object.entries(owned[4]).forEach((data: any) => {
      if (!this.heroesPerFaction[faction].has(data[0])) {return; }
      if (data[1] / 4 >= 1) {
        owned4star.push([data[0], Math.floor(data[1] / 4)]);
        owned4starRemainder += data[1] % 4;
      }
    });
    const maxFusableWith3Star = owned3star.reduce((a, b) => {
      return a + b[1];
    }, 0 );

    const maxFusableWith4Star = owned4star.reduce((a, b) => {
      return a + b[1];
    }, 0 );

    const maxPossibleFusable = Math.min(
      maxFusableWith3Star + Math.floor(owned3starRemainder / 4),
      Math.floor((maxFusableWith4Star + Math.floor(owned4starRemainder / 4)) / 2),
    );

    if (maxPossibleFusable === 0) {
      return 0;
    }

    owned3star.sort((a, b) => {
      return a[1] - b[1];
    }).reverse();

    owned4star.sort((a, b) => {
      return a[1] - b[1];
    }).reverse();

    owned4star.forEach((hero, index) => {
      // @ts-ignore
      const require = this.getFactionData(faction)[5].find((data: any) => data.id === hero[0]).require;
      let needed3Hero;
      // tslint:disable-next-line:forin
      for (needed3Hero in require[3]) { break; }

      const max3StarIndex = owned3star.findIndex((data: any) => data[0] === needed3Hero);
      let max3Star = 0;
      if (max3StarIndex !== -1) {
        max3Star = owned3star[max3StarIndex][1];
      }
      const maxFusable = Math.min(hero[1], max3Star, (maxPossibleFusable - fused));

      fused += maxFusable;
      owned4star[index][1] -= maxFusable;
      if (max3StarIndex !== -1) {
        owned3star[max3StarIndex][1] -= maxFusable;
      }
    });

    return fused;
  }

  public getAmountOfHeroesByStar(exclude, stars, faction) {
    let total = 0;
    Object.entries(this.tempOwnedHeroes[stars]).forEach((heroData: any) => {
      const id = heroData[0];
      const amount = heroData[1];
      if (id !== exclude && this.heroesPerFaction[faction].has(id)) {
        if (amount === undefined) {

        }
        total += amount;
      }
    });
    return total;
  }

  public isFusable(id, stars, faction) {
    // return false;
    // if (stars === 7 && id === 'amenRa') {
    //   this.get5StarFusionAmount(faction);
    // }

    const total5fodder = this.calculateTotalFodder(5, faction) + this.get5StarFusionAmount(faction);
    const requirement = Constants.TOTAL_5STAR_COPY_REQUIREMENT[stars];
    let fodderOffset = this.ownedOffset[faction][5];
    let copiesOffset = 0;
    let requirement6starFodderOffset = 0;



    if (stars === 7) {
      // check if you already own the hero of the prev step
      if (this.tempOwnedHeroes[6][id]) {
        fodderOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[6].fodder;
        copiesOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[6].copies;
        requirement6starFodderOffset = 1;
      }
    }

    // TODO: Add possible other heroes that can be used in the fusion for the cost prediction
    if (stars === 8) {
      const copiesOther6 = this.getAmountOfHeroesByStar(id, 6, faction);
      const copiesHero6 = this.getAmountOfHeroesByStar('', 6, faction) - copiesOther6;

      // check if you already own the hero of the prev step
      if (this.tempOwnedHeroes[7][id]) {
        fodderOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[7].fodder;
        copiesOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[7].copies;
        requirement6starFodderOffset = 1;
      } else if (copiesHero6 > 0) {
        // check if you own the hero before that step
        fodderOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[6].fodder;
        copiesOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[6].copies;
        requirement6starFodderOffset = 1;
      }

      // check 6* fodder requirement
      if (copiesOther6 > 0) {
        fodderOffset += 6;
      }

    }

    if (stars === 9) {
      const copiesOther6 = this.getAmountOfHeroesByStar(id, 6, faction);
      const copiesHero6 = this.getAmountOfHeroesByStar('', 6, faction) - copiesOther6;

      const copiesOther7 = this.getAmountOfHeroesByStar(id, 7, faction);
      const copiesHero7 = this.getAmountOfHeroesByStar('', 7, faction) - copiesOther7;

      // check if you already own the hero of the prev step
      if (this.tempOwnedHeroes[8][id]) {
        fodderOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[8].fodder;
        copiesOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[8].copies;
        requirement6starFodderOffset = 1;
      } else if (copiesHero7 > 0) {
        // check if you own the hero before that step
        fodderOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[7].fodder;
        copiesOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[7].copies;
        requirement6starFodderOffset = 1;
      } else if (copiesHero6 > 0) {
        // check if you own the hero before that step
        fodderOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[6].fodder;
        copiesOffset += Constants.TOTAL_5STAR_COPY_REQUIREMENT[6].copies;
        requirement6starFodderOffset = 1;
      }

      // check 6* fodder requirement
      if (copiesOther6 > 0) {
        fodderOffset += 6;
      }
    }

    // if (stars === 9 && id === 'sigmund') {
    //   console.log(total5fodder, requirement.fodder , fodderOffset);
    // }
    let required5starHero = '';

    Object.entries(this.get6StarRequirements(id, faction).require[5]).forEach((heroReq) => {
      if (heroReq[1] === 1) {
        required5starHero = heroReq[0];
      }
    });

    const notUndefined = (val) => {
      if (!val) {
        return 0;
      } else {
        return val;
      }
    };

    if (total5fodder >= requirement.fodder - fodderOffset) {
      if (notUndefined(this.tempOwnedHeroes[5][id]) >= requirement.copies - copiesOffset) {
        if (required5starHero) {
          if (notUndefined(this.tempOwnedHeroes[5][required5starHero]) >= 1 - requirement6starFodderOffset) {
            return true;
          }
        }
      }
    }
    return false;
  }

  public get6StarRequirements(id, faction): any {
    const faction6StarData: Array<any> = this.getFactionData(faction)[6];
    return faction6StarData.find((hero) => {
      return hero.id === id;
    });
  }

  public getFactionData(faction) {
    switch (faction) {
      case 'forest':
        return Constants.FOREST_HEROES;
      case 'fortress':
        return Constants.FORTRESS_HEROES;
      case 'abyss':
        return Constants.ABYSS_HEROES;
      case 'shadow':
        return Constants.SHADOW_HEROES;
      case 'dark':
        return Constants.DARK_HEROES;
      case 'light':
        return Constants.LIGHT_HEROES;
      default:
        return undefined;
    }
  }

}
