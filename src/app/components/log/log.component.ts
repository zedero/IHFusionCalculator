import { Component, OnInit } from '@angular/core';
import { OwnedService } from '../../services/owned.service';
import * as Constants from '../../globals/Constants';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  public fodder;
  public copies;
  public fused = [];

  constructor(private ownedService: OwnedService) { }

  ngOnInit() {
    this.ownedService.changed.subscribe(() => {
      setTimeout(() => {
        if (!this.ownedService.usedHeroes || !this.ownedService.usedHeroes.fodder) {
          return;
        }
        this.fodder = Object.entries(this.ownedService.usedHeroes.fodder);
        this.copies = Object.entries(this.ownedService.usedHeroes.copies);
        this.fused = this.ownedService.usedHeroes.fused;
      }, 1);
    });
  }

  public getCopiesFromStarGroup(starGroup) {
    return Object.entries(starGroup);
  }

  public getNameFromId(id) {
    if (Constants.FOREST_HEROES[5].find(x => x.id === id)) {
      return Constants.FOREST_HEROES[5].find(x => x.id === id).name;
    } else if (Constants.FOREST_HEROES[3].find(x => x.id === id)) {
      return Constants.FOREST_HEROES[3].find(x => x.id === id).name;
    } else {
      return id.charAt(0).toUpperCase() + id.slice(1).replace(/([A-Z])/g, ' $1').trim();
    }
  }

}
