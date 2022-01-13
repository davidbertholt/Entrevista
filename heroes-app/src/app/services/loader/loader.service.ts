import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }
}
