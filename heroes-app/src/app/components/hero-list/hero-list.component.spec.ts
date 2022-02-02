import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroListComponent } from './hero-list.component';

import { heroesMock } from 'src/app/mocks/heroes.mock';


import { AddSuperheroComponent } from '../add-superhero/add-superhero.component';

import { AbstractHeroService } from 'src/app/clases/hero.abstract-service';
import { MockHeroService } from 'src/app/mocks/heroServiceMock';
import { By } from '@angular/platform-browser';



describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeroListComponent,
        AddSuperheroComponent,
       ],
      providers: [{
        provide: AbstractHeroService,
        useClass: MockHeroService
      }
      ],
      imports: [
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const heroes = heroesMock.heroes
    const heroesExpected = heroes.slice(0,5);

    const spyOnInit = spyOn(component, 'ngOnInit').and.callThrough();
    const spyGetHero = spyOn(component, 'getHeroes');

    component.ngOnInit();

    expect(spyOnInit).toHaveBeenCalled();
    expect(spyGetHero).toHaveBeenCalled();
    expect(component.heroes).toEqual(heroesExpected);
  })

  it('shuld call funcion getHeroes', () => {
    const heroes = heroesMock.heroes
    const heroesExpected = heroes.slice(0,5);

    const spyGetHero = spyOn(component, 'getHeroes').and.callThrough();

    component.getHeroes();

    fixture.detectChanges();

    expect(spyGetHero).toHaveBeenCalled();
    expect(component.heroes).toEqual(heroesExpected);
  });

  it('should change shared attribute when execute onKeyUp', () => {
    const el = fixture.debugElement.query(By.css('input')).nativeElement;

    const spyOnKeyUp = spyOn(component, 'onKeyUp').and.callThrough();
    const spyGetHero = spyOn(component, 'getHeroes')

    el.value = "flash";

    el.dispatchEvent(new Event('keyup'))

    fixture.detectChanges();

    expect(spyOnKeyUp).toHaveBeenCalled();
    expect(component.search).toEqual(el.value);
    expect(spyGetHero).toHaveBeenCalled();
  });

  it('should be render modal when click in delete button', () => {
    const spyDeleteSuperhero = spyOn(component, 'deleteSuperhero').and.callThrough();

    const el = fixture.debugElement.query(By.css('[aria-label="Eliminar"]')).nativeElement;

    el.click();

    fixture.detectChanges();

    expect(spyDeleteSuperhero).toHaveBeenCalled();
    expect(spyDeleteSuperhero).toHaveBeenCalledWith(component.heroes[0]);

  });
});
