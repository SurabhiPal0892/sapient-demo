import { Component, OnInit } from '@angular/core';
import { NotifyActionService } from '../Services/notify-action.service';
import { NotifyCountsService } from '../Services/notify-counts.service';
import { NotifyTimerValueService } from '../Services/notify-timer-value.service';

@Component({
  selector: 'app-timer-reset',
  templateUrl: './timer-reset.component.html',
  styleUrls: ['./timer-reset.component.css']
})
export class TimerResetComponent implements OnInit {
  startCount = 0
  pauseCount = 0;
  reset = false;
  updatedTime: any;
  pausedAtTimes: any = [];
  showStart=true;

  constructor(private _notifyCounts: NotifyCountsService, private _notifyAction: NotifyActionService,
    private _notifyTimerValue: NotifyTimerValueService) {
    this._notifyTimerValue.getPauseTime().subscribe(t => {
      this.updatedTime = t;
      this.pausedAtTimes.push(t);
    })
  }

  ngOnInit(): void {
  }

  startClicked(time) {
    this.startCount++;
    this.showStart=false;
    this.sendClickCounts();
    this.reset = false;
    this.sendActionType('start');
    if (this.updatedTime) {
      this.sendTimerValue(this.updatedTime);
    }
    else {
      this.sendTimerValue(time);
    }
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
    this._notifyCounts.sendClickCounts({ started: this.startCount, paused: this.pauseCount, reset: this.reset });
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

}
