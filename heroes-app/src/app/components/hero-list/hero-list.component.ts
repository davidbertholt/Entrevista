import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Interface
import { IHero } from 'src/app/interfaces/IHero';

// Modal
import { HeroModalComponent } from '../modals/addEdit/modal.component';

// Material design
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

// Services
import { AbstractHeroService } from 'src/app/clases/hero.abstract-service';
import { ConfirmModalComponent } from '../modals/confirm/confirm.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  search = "";
  countElements = "0";
  pageIndex = 0;
  page = "1";
  sizePage = "5";
  heroes: IHero[] = [];
  displayedColumns: string[] = ['id', 'superhero', 'publisher', 'alterEgo', 'firstAppearance', 'characters', 'acciones'];

  constructor(
    public heroService: AbstractHeroService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes = () => {
    this.heroService.getHeroes(this.search, this.page, this.sizePage)
      .subscribe(res => {
          this.countElements = res.headers.get('X-Total-Count') || "0";
          const data = res.body;
          this.heroes = data;
        });
  }

  onKeyUp = (x: any) => {
    this.search = x.target.value;
    this.getHeroes();
  }

  openModal = (hero: IHero) => {
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

  confirmDelete = (hero: IHero) => {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '350px',
      data: hero,
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.deleteSuperhero(hero);
    }});
  }

  deleteSuperhero = (hero: IHero) => {
    this.heroService.deleteHero(hero).subscribe(res => {
      this._snackBar.open(`${hero.superhero} fue eliminado correctamente`, 'OK', {
        duration: 3000
      });
    this.getHeroes();
    });
  }

  setPage = (page: any) => {
    this.page = page.pageIndex + 1;
    this.sizePage = page.pageSize;
    this.getHeroes();
  }

  goToDetail = (id: number) => {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
