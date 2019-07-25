import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { OwnedService } from '../../services/owned.service';
import * as Constants from '../../globals/Constants';
import { Helper } from '../../utilities/helper';

@Component({
  selector: 'app-hero-can-create',
  templateUrl: './hero-can-create.component.html',
  styleUrls: ['./hero-can-create.component.scss']
})
export class HeroCanCreateComponent implements OnInit, OnDestroy {

  public hero;
  public stars;
  public fusable = 0;
  public owned = 0;

  private helper = new Helper();

  @Input()
  set heroData(data) {
    this.hero = data;
  }

  @Input()
  set level(data) {
    this.stars = data;
  }

  constructor(private ownedService: OwnedService) { }

  ngOnInit() {
    this.ownedService.changed.subscribe(() => {
      this.calculateWhatCanBeFused();
    });
    setTimeout(() => {
      this.calculateWhatCanBeFused();
    }, 1);
  }

  public calculateWhatCanBeFused() {
    this.fusable = 1;
    const list = [];

    Object.entries(this.hero.require).forEach((requirements) => {
      const stars = requirements[0];
      const requiredHeroes = requirements[1];
      const requiredFodder = Constants.TOTAL_HERO_REQUIREMENT[this.stars];


      if (requiredFodder) {
        Object.entries(requiredFodder).forEach((fodder) => {
          // @ts-ignore
          const fodderFusable = Math.floor(
            // @ts-ignore
            (this.ownedService.calculateTotalFodder(fodder[0]) + this.ownedService.ownedOffset[fodder[0]]) / fodder[1]
          );
          list.push(fodderFusable);
        });
      }

      Object.entries(requiredHeroes).forEach((hero) => {
        const id = hero[0];
        const amount = hero[1];
        const fusableAmount = Math.floor(this.ownedService.getTempHeroAmount(id, stars) / amount);
        list.push(fusableAmount);
      });
    });
    // if (this.hero.id === 'vesa') {
    //   console.log(list);
    // }
    this.fusable = Math.min(...list);
    this.owned = this.ownedService.getHeroAmount(this.hero.id, this.stars);
  }

  public fuseHero = () => {
    // debugger;
    Object.entries(this.hero.require).forEach((requirements) => {
      const stars = requirements[0];
      const requiredHeroes = requirements[1];

      Object.entries(requiredHeroes).forEach((hero) => {
        const id = hero[0];
        const amount = hero[1];
        const currentAmount = this.ownedService.getTempHeroAmount(id, stars);
        this.ownedService.setTempHeroAmount(id, currentAmount - amount, stars);
      });
    });

    const requiredFodder = Constants.FODDER_REQUIREMENT[this.stars];
    if (requiredFodder) {
      Object.entries(requiredFodder).forEach((fodder) => {
        // @ts-ignore
        this.ownedService.ownedOffset[fodder[0]] -= fodder[1];
      });
    }

    const currentHeroAmount = this.ownedService.getTempHeroAmount(this.hero.id, this.stars);
    this.ownedService.setTempHeroAmount(this.hero.id, currentHeroAmount + 1 , this.stars);
    this.ownedService.log(this.helper.deepCopyObject(this.hero.require), this.helper.deepCopyObject(Constants.FODDER_REQUIREMENT[this.stars]));
  }


  ngOnDestroy() {
    this.ownedService.changed.unsubscribe();
  }

}
