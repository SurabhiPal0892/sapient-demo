import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyActionService {
  pauseButtonClicked = new Subject<any>();
  startButtonClicked = new Subject<any>();
  resetButtonClicked = new Subject<any>();
  constructor() { }
  getPauseClicked(): Observable<any> {
    return this.pauseButtonClicked.asObservable();
  }

  sendPauseClicked(val) {
    this.pauseButtonClicked.next(val);
  }

  getStartClicked(): Observable<any> {
    return this.startButtonClicked.asObservable();
  }

  sendStartClicked(val) {
    this.startButtonClicked.next(val);
  }

  getResetClicked(): Observable<any> {
    return this.resetButtonClicked.asObservable();
  }

  sendResetClicked(val) {
    this.resetButtonClicked.next(val);
  }
}
