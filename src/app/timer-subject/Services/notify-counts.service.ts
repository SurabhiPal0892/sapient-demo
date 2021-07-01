import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyCountsService {
  clickCounts = new Subject<any>();

  constructor() { }
  sendClickCounts(counts) {
    this.clickCounts.next(counts);
  }

  getClickCounts(): Observable<any> {
    return this.clickCounts.asObservable();
  }
}
