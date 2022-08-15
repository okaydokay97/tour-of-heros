import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

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

  heros = HEROS

  constructor() { }

  ngOnInit(): void {
  }
  selectedHero?: Hero
  onSelect(hero:Hero): void {
    this.selectedHero=hero
  }

}
