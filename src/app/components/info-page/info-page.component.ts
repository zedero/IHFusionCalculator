import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  public hero;
  public heroData;

  constructor() {
    this.hero = {name: 'Valkyrie'};
    this.heroData = {
      id: 'infoPageHero',
      name: 'Valkyrie',
      require: {

      }
    };
  }

  ngOnInit() {
  }

}
