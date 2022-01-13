import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Interface
import { IHero } from "../../interfaces/IHero";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url = 'http://localhost:3000/';
  urlHero = `${this.url}heroes/`
  responseString: string = "";

  private heroes: Subject<IHero[]> = new Subject<IHero[]>();
  heroes$ = this.heroes.asObservable();

  private countElements: Subject<string> = new Subject<string>();
  countElements$ = this.countElements.asObservable()

  private fliterWord: string = "";
  private actualPage: number = 1;
  private sizePage: number = 5;

  constructor(private httpClient: HttpClient) { }

  setFilteredHeroes(filter: string ) {
    this.httpClient.get<any>(`${this.urlHero}?superhero_like=${filter}&_page=${this.actualPage}&_limit=${this.sizePage}`, {observe: 'response'})
      .subscribe((response) => {
        this.countElements.next(response.headers.get('X-Total-Count') || "");
        const data = response.body;
        this.heroes.next(data)
      })
  }

  getHeroes() {
    this.httpClient.get<any>(`${this.urlHero}?superhero_like=${this.fliterWord}&_page=${this.actualPage}&_limit=${this.sizePage}`, {observe: 'response'})
      .subscribe((response) => {
        this.countElements.next(response.headers.get('X-Total-Count') || "");
        const data = response.body;
        this.heroes.next(data)
      })
  }

  getHeroByID(id: number): Observable<IHero> {
    return this.httpClient.get<any>(`${this.urlHero}${id}`)
  }

  addHero(hero: IHero) {
    this.httpClient.post<IHero>(`${this.urlHero}`, hero).subscribe(res => this.responseString = res.superhero);
    return this.responseString;
  }

  setHero(hero: IHero) {
    this.httpClient.put<IHero>(`${this.urlHero}${hero.id}`, hero).subscribe(res => this.responseString = res.superhero);
    return this.responseString;
  }

  deleteHero(hero: IHero) {
    this.httpClient.delete<any>(`${this.urlHero}${hero.id}`).subscribe(res => this.responseString = res.superhero);
    return this.responseString;
  }

  setPag(page: any) {
    this.actualPage = page.pageIndex + 1;
    this.sizePage = page.pageSize;
  }
}
