import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from "./hero/hero.component";
import {FormsModule} from "@angular/forms";
import {HeroService} from "./hero/hero.service";
import {Logger} from "./logger.service";
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    HeroDetailComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService, Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
