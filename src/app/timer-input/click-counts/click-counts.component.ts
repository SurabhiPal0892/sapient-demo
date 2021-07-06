import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-click-counts',
  templateUrl: './click-counts.component.html',
  styleUrls: ['./click-counts.component.css']
})
export class ClickCountsComponent implements OnInit {
  @Input() actionCount: { start: number; pause: number };

  constructor() { }

  ngOnInit() {
    this.actionCount = { start: 0, pause: 0 };
  }
}
