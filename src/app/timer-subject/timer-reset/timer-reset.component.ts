import { Component, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifyActionService } from '../Services/notify-action.service';
import { NotifyCountsService } from '../Services/notify-counts.service';
import { NotifyTimerValueService } from '../Services/notify-timer-value.service';

@Component({
  selector: 'app-timer-reset',
  templateUrl: './timer-reset.component.html',
  styleUrls: ['./timer-reset.component.css']
})
export class TimerResetComponent implements OnInit,OnDestroy {
  startCount = 0
  pauseCount = 0;
  reset = false;
  updatedTime: number;
  pausedAtTimes= [];
  showStart=true;
  timerValue$: Subscription;
  timeLimit

  constructor(private _notifyCounts: NotifyCountsService, private _notifyAction: NotifyActionService,
    private _notifyTimerValue: NotifyTimerValueService) {
    this.timerValue$=this._notifyTimerValue.getPauseTime().subscribe(t => {
      this.updatedTime = t;
      this.pausedAtTimes.push(t);
    })
  }

  ngOnInit(): void {
  }

  updateTimerValue(time){
    this.sendTimerValue(time);
  }

  startClicked() {
    this.startCount++;
    this.showStart=false;
    this.sendClickCounts();
    this.reset = false;
    this.sendActionType('start');
  }

  pauseClicked() {
    this.pauseCount++;
    this.reset = false;
    this.showStart=true;
    this.sendClickCounts();
    this.sendActionType('pause');
  }

  resetClicked(time) {
    this.reset = true;
    this.showStart=true;
    this.startCount = 0;
    this.pauseCount = 0;
    this.updatedTime = null;
    this.pausedAtTimes = [];
    this.sendClickCounts();
    this.sendActionType('reset');
    this.sendTimerValue(time);
  }

  sendTimerValue(time) {
    this._notifyTimerValue.sendTimerValue(time);
  }

  sendClickCounts() {
    this._notifyCounts.sendClickCounts({ start: this.startCount, pause: this.pauseCount});
  }

  sendActionType(actionType) {
    if (actionType == 'start') {
      this._notifyAction.sendStartClicked(true);
      this._notifyAction.sendPauseClicked(false);
      this._notifyAction.sendResetClicked(false);

    }
    if (actionType == 'pause') {
      this._notifyAction.sendPauseClicked(true);
      this._notifyAction.sendResetClicked(false);
      this._notifyAction.sendStartClicked(false);
    }
    if (actionType == 'reset') {
      this._notifyAction.sendResetClicked(true);
      this._notifyAction.sendStartClicked(false);
      this._notifyAction.sendPauseClicked(false);
    }
  }

  ngOnDestroy(){
    this.timerValue$.unsubscribe();
  }

}
