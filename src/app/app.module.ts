import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesFormComponent } from './components/heroes-form/heroes-form.component';
import { HeroInputComponent } from './components/hero-input/hero-input.component';
import { HeroCanCreateComponent } from './components/hero-can-create/hero-can-create.component';
import { LogComponent } from './components/log/log.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { InfoPageComponent } from './components/info-page/info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesFormComponent,
    HeroInputComponent,
    HeroCanCreateComponent,
    LogComponent,
    ListHeaderComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
