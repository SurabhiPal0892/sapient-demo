import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifyActionService } from '../Services/notify-action.service';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.css']
})
export class TimerLogComponent implements OnInit,OnDestroy {
  actionLog = [];
  log: { action: string; time: number; };
  actionReset$: Subscription;
  actionStart$: Subscription;
  actionPause$: Subscription;


  constructor(private _notifyAction: NotifyActionService) {
    this.actionStart$=this._notifyAction.getStartClicked().subscribe(e => {
      if (e) {
        let time = Date.now();
        this.log = { action: 'Started', time: time }
        this.actionLog.push(this.log);
      }
    })
    this.actionPause$=this._notifyAction.getPauseClicked().subscribe(e => {
      if (e) {
        let time = Date.now();
        this.log = { action: 'Paused', time: time }
        this.actionLog.push(this.log);
      }
    })
    this.actionReset$=this._notifyAction.getResetClicked().subscribe(e => {
      if (e) {
        this.actionLog = [];
      }
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(){
    this.actionPause$.unsubscribe();
    this.actionReset$.unsubscribe();
    this.actionStart$.unsubscribe();
  }

}
