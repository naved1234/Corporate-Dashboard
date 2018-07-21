import  {Component} from '@angular/core';
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  title = 'Hero Component';
  hero = { name: 'Jane Doe', salary: 2313, joinDate: new Date()};
  imgUrl = 'https://pbs.twimg.com/profile_images/1013607595616038912/pRq_huGc_400x400.jpg';
  onClickHandler(hero) {
    console.log(hero);
    alert(hero.name);
  }
  heroes = [{id: 1, name: 'Jane'}, {id: 2, name: 'Smith'}];
  currentStyles = {'font-weight': 'bold'};

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }
}
