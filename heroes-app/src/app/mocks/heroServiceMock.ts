import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AbstractHeroService } from "../clases/hero.abstract-service";
import { IHero } from "../interfaces/IHero";
import serviceResponseMock from "./service-response.mock";

import { heroesMock } from 'src/app/mocks/heroes.mock';

@Injectable({
    providedIn: 'root'
  })
  export class MockHeroService implements AbstractHeroService {
    private mockResponse: any;

    constructor() {
        this.mockResponse = serviceResponseMock.serviceResponseMock;
    }

    public getHeroes(): Observable<any> {
      return of(this.mockResponse);
    }
    public getHeroByID(id: number): Observable<IHero> {
        const hero = this.mockResponse.body.heroes.find((x: { id: number; }) => x.id == id);
        return of(hero);
    }
    public addHero(hero: IHero): Observable<any> {
      return of("Added");
    }
    public setHero(hero: IHero): Observable<any> {
      return of("Edited");
    }
    public deleteHero(hero: IHero): Observable<any> {
        const heroes = this.mockResponse.body;
        const index = heroes.indexOf((x: { id: number; }) => x.id == hero.id)

        heroes.splice(index, 1);

        const newHero = {
          "id": 6,
          "superhero":"Wonder Woman",
          "publisher":"DC Comics",
          "alterEgo":"Princess Diana",
          "firstAppearance":"All Star Comics #8",
          "characters":"Princess Diana"
        }

        heroes.push(newHero)

        return of(heroes);
    }
  }