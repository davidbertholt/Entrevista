import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { heroesMock } from 'src/app/mocks/heroes.mock';
import { IHero } from 'src/app/interfaces/IHero';

fdescribe('HeroService', () => {
  let httpTestingController: HttpTestingController;
  let service: HeroService;
  const urlBase = "http://localhost:3000/heroes/";
  beforeEach(() => {


    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(HeroService);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getHeroes called correctly', (done) => {
    const heroesUrl = `${urlBase}?superhero_like=&_page=1&_limit=5`;
    const expectedData = heroesMock;
    service.getHeroes().subscribe(data => {
      expect(data.url).toEqual(heroesUrl);
      expect(data.body).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(heroesUrl);
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush(expectedData);
  });

  it('getHeroByID is called correctly', (done) => {
    const id = 1;
    const heroesUrl = `${urlBase}${id}`;
    const expectedData = heroesMock.heroes[id];
    service.getHeroByID(id).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(heroesUrl);
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush(expectedData);
  });

  it('addHero is called correctly', (done) => {
    const newHero: IHero = {
      id:21,
      superhero:"Joker",
      publisher:"DC Comics",
      alterEgo:"No se conoce",
      firstAppearance:"La ultima sonrisa",
      characters:"No conocido"
    }
    const heroesUrl = `${urlBase}`;
    const expectedData = heroesMock.heroes;
    service.addHero(newHero).subscribe(data => {
      done();
    });

    const testRequest = httpTestingController.expectOne(heroesUrl);
    expect(testRequest.request.method).toEqual('POST');
    expect(testRequest.request.body).toEqual(newHero);
    testRequest.flush(expectedData);
  });

  it('setHero is called correctly', (done) => {
    const editedHero: IHero = { ...heroesMock.heroes[1], superhero: "CAMBIADO"};
    const id = heroesMock.heroes[1].id;
    const heroesUrl = `${urlBase}${id}`;
    const expectedData = heroesMock.heroes[id];
    service.setHero(editedHero).subscribe(data => {
      done();
    });

    const testRequest = httpTestingController.expectOne(heroesUrl);
    expect(testRequest.request.method).toEqual('PUT');
    expect(testRequest.request.body).toEqual(editedHero);
    testRequest.flush(expectedData);
  });

  it('deleteHero is called correctly', (done) => {
    const deletedHero: IHero = heroesMock.heroes[1];
    const id = heroesMock.heroes[1].id;
    const heroesUrl = `${urlBase}${id}`;
    const expectedData = heroesMock.heroes[id];
    service.deleteHero(deletedHero).subscribe(data => {
      done();
    });

    const testRequest = httpTestingController.expectOne(heroesUrl);
    expect(testRequest.request.method).toEqual('DELETE');
    testRequest.flush(expectedData);
  });
});
