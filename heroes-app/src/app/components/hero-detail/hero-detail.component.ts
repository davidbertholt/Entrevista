import { Component, OnInit } from '@angular/core';

// Route
import { ActivatedRoute, Params } from '@angular/router';

// Interface
import { IHero } from 'src/app/interfaces/IHero';

// Service
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  idHero:any;
  heroe!: IHero;
  constructor(
    private rutaActiva: ActivatedRoute,
    private heroService: HeroService
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero () {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idHero = params;
      });
      this.heroService.getHeroByID(this.idHero.id).subscribe(res => this.heroe = res);
  }
}
