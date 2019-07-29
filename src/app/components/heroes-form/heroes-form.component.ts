import { Component, Input, OnInit } from '@angular/core';
import { OwnedService } from '../../services/owned.service';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.scss']
})
export class HeroesFormComponent implements OnInit {

  public heroes;
  public FACTION;
  public stars = [3, 4, 5, 6, 7, 8, 9];
  public fusionStars = [5, 6, 7, 8, 9];

  @Input()
  set listHeroes(heroList) {
    this.heroes = heroList;
  }

  @Input()
  set faction(faction) {
    this.FACTION = faction;
  }

  constructor(private ownedService: OwnedService) { }

  ngOnInit() {
  }

  public canCreate(hero) {
    return !!Object.values(hero.require).length;
  }

  public manualSave() {
    this.ownedService.manualSave();
  }
  public manualLoad() {
    this.ownedService.manualLoad();
  }

  public resetForm() {
    this.ownedService.clear(this.FACTION);
  }

}
