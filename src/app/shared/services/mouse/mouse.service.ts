import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MouseService {
  isMouseDown$ = new BehaviorSubject(false);

  constructor() { }

  mouseDown(): void {
    if (this.isMouseDown$.getValue()) { return; }
    this.isMouseDown$.next(true);
  }

  mouseUp(): void {
    this.isMouseDown$.next(false);
  }
}
