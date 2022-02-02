import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Interface
import { IHero } from "../../interfaces/IHero";
import { AbstractHeroService } from 'src/app/clases/hero.abstract-service';

@Injectable({
  providedIn: 'root'
})
export class HeroService implements AbstractHeroService {
  url = 'http://localhost:3000/';
  urlHero = `${this.url}heroes/`

  constructor(private httpClient: HttpClient) { }

  getHeroes(search: string = "", page: string = "1", sizePage:string = "5"): Observable<any>{
    return this.httpClient.get<any>(`${this.urlHero}?superhero_like=${search}&_page=${page}&_limit=${sizePage}`, {observe: 'response'})
  }

  getHeroByID(id: number): Observable<IHero> {
    return this.httpClient.get<any>(`${this.urlHero}${id}`)
  }

  addHero(hero: IHero): Observable<any> {
    return this.httpClient.post<IHero>(`${this.urlHero}`, hero);
  }

  setHero(hero: IHero): Observable<any> {
    return this.httpClient.put<IHero>(`${this.urlHero}${hero.id}`, hero);
  }

  deleteHero(hero: IHero): Observable<any> {
    return this.httpClient.delete<any>(`${this.urlHero}${hero.id}`);
  }
}
