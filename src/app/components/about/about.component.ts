import { Component, Input, OnInit, Output } from '@angular/core';

class EventEmitter {
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public closeModalFunction = () => {};

  @Input()
  set close(data) {
    this.closeModalFunction = data;
  }

  constructor() { }

  ngOnInit() {
  }

  public closeModal = () => {
    this.closeModalFunction();
  }

}
