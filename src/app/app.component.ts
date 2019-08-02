import { Component } from '@angular/core';
import * as Constants from './globals/Constants';
import { OwnedService } from './services/owned.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private saveActiveFactionName = 'IHCalcActiveFaction';

  public FOREST = Constants.FOREST_HEROES;
  public FOREST_ID = 'forest';
  public DARK = Constants.DARK_HEROES;
  public DARK_ID = 'dark';
  public LIGHT = Constants.LIGHT_HEROES;
  public LIGHT_ID = 'light';
  public FORTRESS = Constants.FORTRESS_HEROES;
  public FORTRESS_ID = 'fortress';
  public SHADOW = Constants.SHADOW_HEROES;
  public SHADOW_ID = 'shadow';
  public ABYSS = Constants.ABYSS_HEROES;
  public ABYSS_ID = 'abyss';
  public INFO_ID = 'info';

  public factionList = [
    {
      value: this.INFO_ID,
      text: 'Info',
      selected: true,
    },
    {
      value: this.FOREST_ID,
      text: 'Forest',
    },
    {
      value: this.FORTRESS_ID,
      text: 'Fortress',
    },
    {
      value: this.SHADOW_ID,
      text: 'Shadow',
    },
    {
      value: this.ABYSS_ID,
      text: 'Abyss',
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

    const savedActiveFaction = localStorage.getItem(this.saveActiveFactionName);
    if (savedActiveFaction) {
      this.factionList.map((data) => {
        data.selected = data.value === savedActiveFaction;
      });
      this.activeFaction = savedActiveFaction;
    }
  }

  public selectFaction(evt) {
    this.activeFaction = evt.target.value;
    localStorage.setItem(this.saveActiveFactionName, this.activeFaction);
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

  public about() {
    alert('Made by Zedero (https://github.com/zedero)');
  }

}
