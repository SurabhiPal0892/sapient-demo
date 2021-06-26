import { Component, OnInit } from '@angular/core';
import { NotifyActionService } from '../notify-action.service';
import { NotifyTimerValueService } from '../notify-timer-value.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  interval: any;
  countdownValue = 1000;

  constructor(private _notifyTimerValue: NotifyTimerValueService, private _notifyAction: NotifyActionService) {
    this._notifyTimerValue.getTimerValue().subscribe(t => {
      if (t && t !== "") {
        this.countdownValue = t;
      }
      else {
        this.countdownValue = 1000;
      }
    })
    this._notifyAction.getPauseClicked().subscribe(e => {
      if (e) {
        this.pauseTimer();
        this._notifyTimerValue.sendPauseTime(this.countdownValue);
      }
    })
    this._notifyAction.getResetClicked().subscribe(e => {
      if (e) {
        this.pauseTimer();
      }
    })
    this._notifyAction.getStartClicked().subscribe(e => {
      if (e) {
        this.startTimer();
      }
    })
  }

  ngOnInit(): void {
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

}
