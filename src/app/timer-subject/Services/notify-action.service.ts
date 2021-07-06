import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyActionService {
  pauseButtonClicked = new Subject<boolean>();
  startButtonClicked = new Subject<boolean>();
  resetButtonClicked = new Subject<boolean>();

  constructor() { }
  
  getPauseClicked(): Observable<boolean> {
    return this.pauseButtonClicked.asObservable();
  }

  sendPauseClicked(val) {
    this.pauseButtonClicked.next(val);
  }

  getStartClicked(): Observable<boolean> {
    return this.startButtonClicked.asObservable();
  }

  sendStartClicked(val) {
    this.startButtonClicked.next(val);
  }

  getResetClicked(): Observable<boolean> {
    return this.resetButtonClicked.asObservable();
  }

  sendResetClicked(val) {
    this.resetButtonClicked.next(val);
  }
}
