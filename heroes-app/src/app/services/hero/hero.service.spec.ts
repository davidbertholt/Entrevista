import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { cold } from 'jasmine-marbles';

import { heroesMock } from 'src/app/mocks/heroes.mock';

import { HeroService } from './hero.service';
import { of, Subject } from 'rxjs';


describe('HeroService', () => {
  let service: HeroService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const heroesSubject = new Subject();

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = new HeroService(httpClientSpy);

    heroesSubject.next(heroesMock);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HeroService, useValue: of(heroesMock) },
        { provide: HttpClient, useValue: httpClientSpy },
      ]
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('getHeroes called correctly', () => {
    let call = spyOn(service, 'getHeroes');
    let spy1 = spyOn(heroesSubject, 'subscribe')

    service.getHeroes();

    expect(call).toHaveBeenCalled();
    expect(spy1).toHaveBeenCalled();
  });

  it('getHeroByID', () => {
    expect(service).toBeTruthy();
  });

  it('addHero', () => {
    expect(service).toBeTruthy();
  });

  it('setHero', () => {
    expect(service).toBeTruthy();
  });

  it('deleteHero', () => {
    expect(service).toBeTruthy();
  });

  it('setPag', () => {
    expect(service).toBeTruthy();
  });
});
