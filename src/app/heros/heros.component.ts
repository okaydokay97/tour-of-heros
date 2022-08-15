import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  hero:Hero = {
    id:1,
    name:'Windstorm'
  }

  heros: Hero[] = []

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeros()
  }

  selectedHero?: Hero
  onSelect(hero:Hero): void {
    this.selectedHero=hero
  }

  getHeros():void {
    this.heroService.getHeros()
      .subscribe(heros => this.heros = heros)
  }

}
