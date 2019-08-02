import { AfterViewInit, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { OwnedService } from '../../services/owned.service';
import { Helper } from '../../utilities/helper';

@Component({
  selector: 'app-hero-input',
  templateUrl: './hero-input.component.html',
  styleUrls: ['./hero-input.component.scss']
})
export class HeroInputComponent implements AfterViewInit, OnDestroy  {

  public hero;
  public stars;
  public faction;

  public bagAmount = 0;
  public rosterAmount = 0;
  public total = 0;

  public lastChild = false;

  public ownedServiceChangeSubscription;

  public disabled = false;

  private helper = new Helper();

  @ViewChild('bag', {static: false})
  public bagInputElement: any;

  @ViewChild('roster', {static: false})
  public rosterInputElement: any;

  @Input()
  set heroData(data) {
    this.hero = data;
    this.faction = this.ownedService.getFactionFromHeroId(this.hero.id);
  }

  @Input()
  set level(data) {
    this.stars = data;
  }

  @Input()
  set disable(data) {
    this.disabled = data;
  }

  @Input()
  set last(data) {
    this.lastChild = data;
  }

  constructor(private ownedService: OwnedService) {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.bagInputElement.nativeElement.value = this.bagAmount = this.ownedService.getHeroBagAmount(this.hero.id, this.stars);
      this.rosterInputElement.nativeElement.value = this.rosterAmount = this.ownedService.getHeroRosterAmount(this.hero.id, this.stars);
      this.total = this.bagAmount + this.rosterAmount;
    }, 1);

    this.ownedServiceChangeSubscription = this.ownedService.changed.subscribe(() => {
      this.setTotal();
    });
  }

  public setBagValue(value) {
    value = parseInt(value, 10);
    if (isNaN(value)) {
      value = 0;
    }
    this.bagAmount = value;
    this.setHeroOwned();
  }

  public setRosterValue(value) {
    value = parseInt(value, 10);
    if (isNaN(value)) {
      value = 0;
    }
    this.rosterAmount = value;
    this.setHeroOwned();
  }

  public setHeroOwned() {
    const tempTotal = this.bagAmount + this.rosterAmount;
    this.ownedService.setHeroBagAmount(this.hero.id, this.bagAmount, this.stars);
    this.ownedService.setHeroRosterAmount(this.hero.id, this.rosterAmount, this.stars);
    this.ownedService.setHeroAmount(this.hero.id, tempTotal, this.stars);
  }

  public setTotal = () => {
    this.bagInputElement.nativeElement.value = this.ownedService.getHeroBagAmount(this.hero.id, this.stars);
    this.rosterInputElement.nativeElement.value = this.ownedService.getHeroRosterAmount(this.hero.id, this.stars);
    this.total = this.ownedService.getTempHeroAmount(this.hero.id, this.stars);
  }

  public ngOnDestroy() {
    this.ownedServiceChangeSubscription.unsubscribe();
  }

}
