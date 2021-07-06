import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifyCountsService } from '../Services/notify-counts.service';

@Component({
  selector: 'app-click-counts',
  templateUrl: './click-counts.component.html',
  styleUrls: ['./click-counts.component.css']
})
export class ClickCountsComponent implements OnInit,OnDestroy {
  clickCounts = { start: 0, pause: 0 };
  clickCounts$: Subscription;

  constructor(private _notifyClickCounts: NotifyCountsService) {
    this.clickCounts$=this._notifyClickCounts.getClickCounts().subscribe(counts => {
      this.clickCounts = counts;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.clickCounts$.unsubscribe();
  }

}
