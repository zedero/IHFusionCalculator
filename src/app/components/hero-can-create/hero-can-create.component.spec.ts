import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCanCreateComponent } from './hero-can-create.component';

describe('HeroCanCreateComponent', () => {
  let component: HeroCanCreateComponent;
  let fixture: ComponentFixture<HeroCanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
