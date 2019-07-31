import { Component } from '@angular/core';
import * as Constants from './globals/Constants';
import { OwnedService } from './services/owned.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public FOREST = Constants.FOREST_HEROES;
  public FOREST_ID = 'forest';
  public DARK = Constants.DARK_HEROES;
  public DARK_ID = 'dark';
  public LIGHT = Constants.LIGHT_HEROES;
  public LIGHT_ID = 'light';
  public FORTRESS = Constants.FORTRESS_HEROES;
  public FORTRESS_ID = 'fortress';

  public factionList = [
    {
      value: this.FOREST_ID,
      text: 'Forest',
      selected: true,
    },
    {
      value: this.FORTRESS_ID,
      text: 'Fortress',
      selected: true,
    },
    {
      value: this.LIGHT_ID,
      text: 'Light',
    },
    {
      value: this.DARK_ID,
      text: 'Dark',
    },
  ];

  public activeFaction;

  constructor(private ownedService: OwnedService) {
    const whatIsSelectedList = this.factionList.filter((obj: any) => {
      return obj.hasOwnProperty('selected') && obj.selected;
    });
    this.activeFaction = whatIsSelectedList[whatIsSelectedList.length - 1].value;
  }

  public selectFaction(evt) {
    this.activeFaction = evt.target.value;
  }

  public isActive(faction) {
    return faction === this.activeFaction;
  }

  public manualSave() {
    this.ownedService.manualSave();
  }
  public manualLoad() {
    this.ownedService.manualLoad();
  }

}
