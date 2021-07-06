import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyCountsService {
  clickCounts = new Subject<{start:number,pause:number}>();

  constructor() { }

  sendClickCounts(counts) {
    this.clickCounts.next(counts);
  }

  getClickCounts(): Observable<{start:number,pause:number}> {
    return this.clickCounts.asObservable();
  }
}
