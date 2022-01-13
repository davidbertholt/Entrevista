import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Interface
import { IHero } from 'src/app/interfaces/IHero';

// Service
import { HeroService } from 'src/app/services/hero/hero.service';

// Modal
import { HeroModalComponent } from '../modal/modal.component';

// Material design
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  search = "";
  countElements = "";
  pageIndex = 0;
  heroes: IHero[] = [];
  displayedColumns: string[] = ['id', 'superhero', 'publisher', 'alterEgo', 'firstAppearance', 'characters', 'acciones'];

  constructor(
    private heroService: HeroService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes();
    this.heroService.heroes$.subscribe(data => this.heroes = data);
  }

  openModal(hero: IHero) {
    const dialogRef = this.dialog.open(HeroModalComponent, {
      width: '350px',
      data: hero,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this._snackBar.open(result, 'OK', {
          duration: 3000
        });
        this.getHeroes();
      }
    });
  }

  deleteSuperhero(hero: IHero) {
    this.heroService.deleteHero(hero);
    this._snackBar.open(`${hero.superhero} eliminado`, 'OK', {
      duration: 3000
    });
    this.getHeroes();

  }

  getCountElements() {
    return this.heroService.countElements$;
  }

  setPage(page: any) {
    this.heroService.setPag(page);
    this.getHeroes();
  }

  goToDetail(id: number) {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
