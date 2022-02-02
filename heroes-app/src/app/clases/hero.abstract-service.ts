import { Observable } from "rxjs";
import { IHero } from "../interfaces/IHero";

export abstract class AbstractHeroService {
    public abstract getHeroes(search: string, page: string, sizePage:string): Observable<any>;
    public abstract getHeroByID(id: number): Observable<IHero>;
    public abstract addHero(hero: IHero): Observable<any>;
    public abstract setHero(hero: IHero): Observable<any>;
    public abstract deleteHero(hero: IHero): Observable<any>;
}