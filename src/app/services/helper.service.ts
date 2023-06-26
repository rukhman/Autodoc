import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class HelperService {
  innerWidth = 0
  isModalOpened = false;
  isAddDisabled$ = new BehaviorSubject(false);
  constructor() {
  }
}
