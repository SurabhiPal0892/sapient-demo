import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyTimerValueService {
  timerValue = new Subject<any>();
  pausedAt = new Subject<any>();;

  constructor() { }
  sendTimerValue(time: number) {
    this.timerValue.next(time);
  }

  getTimerValue(): Observable<any> {
    return this.timerValue.asObservable();
  }

  sendPauseTime(time: number) {
    this.pausedAt.next(time);
  }

  getPauseTime(): Observable<any> {
    return this.pausedAt.asObservable();
  }
}
