import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.css']
})
export class TimerLogComponent implements OnInit {
  @Input() actionLog: any = {};
  arr: any = [];
  action: string;
  constructor() { }

  ngOnInit() {
    this.actionLog = { started: 'false', paused: 'false' };
  }

  ngOnChanges(changes: SimpleChanges) {
    let time = Date.now();
    let obj = {};
    if (this.actionLog.paused == 'true') {
      obj = { action: 'Paused', time: time };
      this.arr.push(obj);
    }
    if (this.actionLog.started == 'true') {
      obj = { action: 'Started', time: time };
      this.arr.push(obj);
    }
  }
}
