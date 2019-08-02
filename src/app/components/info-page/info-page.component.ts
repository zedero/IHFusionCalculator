import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  public hero;
  public heroData;
  public heroList;

  constructor() {
    this.hero = {name: 'Valkyrie', id: 'infoPageHero'};
    this.heroData = {
      id: 'infoPageHero',
      name: 'Valkyrie',
      require: {}
    };
    this.heroList = {
      4: [],
      6: [
        {
          id: 'infoPageHero'
        }
      ],
    };
  }

  ngOnInit() {
  }

}
