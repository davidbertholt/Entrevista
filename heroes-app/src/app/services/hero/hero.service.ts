import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private httpClient: HttpClient) { }

  getHeroes(search: string = "", page: string = "1", sizePage:string = "5"): Observable<any>{
    return this.httpClient.get<any>(`${this.urlHero}?superhero_like=${search}&_page=${page}&_limit=${sizePage}`, {observe: 'response'})
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
}
