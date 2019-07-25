import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInputComponent } from './hero-input.component';

describe('HeroInputComponent', () => {
  let component: HeroInputComponent;
  let fixture: ComponentFixture<HeroInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
