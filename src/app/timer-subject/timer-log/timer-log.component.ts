import { Component, OnInit } from '@angular/core';
import { NotifyActionService } from '../notify-action.service';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.css']
})
export class TimerLogComponent implements OnInit {
  actionLog = [];
  log: { action: string; time: number; };


  constructor(private _notifyAction: NotifyActionService) {
    this._notifyAction.getStartClicked().subscribe(e => {
      if (e) {
        let time = Date.now();
        this.log = { action: 'Started', time: time }
        this.actionLog.push(this.log);
      }
    })
    this._notifyAction.getPauseClicked().subscribe(e => {
      if (e) {
        let time = Date.now();
        this.log = { action: 'Paused', time: time }
        this.actionLog.push(this.log);
      }
    })
    this._notifyAction.getResetClicked().subscribe(e => {
      if (e) {
        this.actionLog = [];
      }
    })
  }

  ngOnInit(): void {
  }

}
