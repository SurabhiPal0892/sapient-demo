import { Component, OnInit } from '@angular/core';
import { NotifyCountsService } from '../Services/notify-counts.service';

@Component({
  selector: 'app-click-counts',
  templateUrl: './click-counts.component.html',
  styleUrls: ['./click-counts.component.css']
})
export class ClickCountsComponent implements OnInit {
  clickCounts = { started: 0, paused: 0, reset: false };

  constructor(private _notifyClickCounts: NotifyCountsService) {
    this._notifyClickCounts.getClickCounts().subscribe(counts => {
      this.clickCounts = counts;
    })
  }

  ngOnInit(): void {
  }

}
