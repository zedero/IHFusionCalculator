import { Component } from '@angular/core';
import * as Constants from './globals/Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public FOREST = Constants.FOREST_HEROES;

  constructor() {

  }

}
