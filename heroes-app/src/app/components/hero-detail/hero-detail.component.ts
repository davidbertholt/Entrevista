import { Component, OnDestroy, OnInit } from '@angular/core';

// Route
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

// Interface
import { IHero } from 'src/app/interfaces/IHero';

// Service
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  idHero:any;
  heroe!: IHero;
  clientSubscription!: Subscription;
  constructor(
    private rutaActiva: ActivatedRoute,
    private heroService: HeroService
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  ngOnDestroy() {
    this.clientSubscription?.unsubscribe();
  }

  getHero = () => {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idHero = params;
      });
      const heroe$ = this.heroService.getHeroByID(this.idHero.id); 
      this.clientSubscription = heroe$.subscribe(res => this.heroe = res);
  }
}
