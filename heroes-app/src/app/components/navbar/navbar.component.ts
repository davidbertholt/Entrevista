import { Component } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private heroService: HeroService) { }

  onKeyUp = (x: any) => {
    this.heroService.setFilteredHeroes(x.target.value);
  }
}
