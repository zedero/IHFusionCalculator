import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Helper } from '../utilities/helper';
import * as Constants from '../globals/Constants';

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
    this.ownedOffset = {
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
    console.log('CLEAR CERTAIN FACTION ONLY');
    this.ownedHeroes = {};
    this.tempOwnedHeroes = {};
    this.ownedHeroesBag = {};
    this.ownedHeroesRoster = {};
    this.changed.next();
  }

  ngOnDestroy() {
    this.changed.unsubscribe();
  }

}
