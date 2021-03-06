import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifyActionService } from '../Services/notify-action.service';
import { NotifyTimerValueService } from '../Services/notify-timer-value.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit,OnDestroy {
  interval: ReturnType<typeof setTimeout>;
  countdownValue = 1000;
  timerValue$: Subscription;
  actionPause$: Subscription;
  actionReset$: Subscription;
  actionStart$: Subscription;
  pausedAt: number;

  constructor(private _notifyTimerValue: NotifyTimerValueService, private _notifyAction: NotifyActionService) {
    this.timerValue$=this._notifyTimerValue.getTimerValue().subscribe(t => {
      if (t && t !== "") {
        this.countdownValue = t;
      }
      else{
        this.countdownValue = 1000;
      }
    })
    this.actionPause$=this._notifyAction.getPauseClicked().subscribe(e => {
      if (e) {
        this.pausedAt=this.countdownValue;
        this.pauseTimer();
        this._notifyTimerValue.sendPauseTime(this.pausedAt);
      }
    })
    this.actionReset$=this._notifyAction.getResetClicked().subscribe(e => {
      if (e) {
        this.resetTimer();
      }
    })
    this.actionStart$=this._notifyAction.getStartClicked().subscribe(e => {
      if (e) {
        this.startTimer();
      }
    })
  }

  ngOnInit(): void {
  }

  resetTimer(){
    this.pausedAt=0;
    this.pauseTimer();
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.countdownValue > 0) {
        this.countdownValue--;
      }
    }, 1000);
  }

  ngOnDestroy(){
    this.actionStart$.unsubscribe();
    this.actionReset$.unsubscribe();
    this.actionPause$.unsubscribe();
    this.timerValue$.unsubscribe();
  }

}
