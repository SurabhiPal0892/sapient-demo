import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.css']
})
export class TimerLogComponent implements OnInit {
  @Input() actionType: any;
  actionLog: any = [];
  action: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let time = Date.now();
    let obj = {};
    if (this.actionType) {
      if (this.actionType.pause) {
        obj = { action: 'Paused', time: time };
        this.actionLog.push(obj);
      }
      if (this.actionType.start) {
        obj = { action: 'Started', time: time };
        this.actionLog.push(obj);
      }
      if(this.actionType.reset){
        this.actionLog=[];
      }
    }
  }
}
