import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() timer;
  @Input() actionType: { start: boolean, pause: boolean, reset: boolean };
  @Output() updatedTimer = new EventEmitter();
  interval: ReturnType<typeof setTimeout>;
  pausedAt: number;
  countdownValue: number;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.setCountdownValue(changes);
    this.setActionType(changes);
  }

  setActionType(changes) {
    if (changes.actionType) {
      if (changes.actionType.currentValue) {
        if (changes.actionType.currentValue['start'] && !changes.actionType.currentValue['pause']) {
          this.startTimer();
        } else if (!changes.actionType.currentValue['start'] && changes.actionType.currentValue['pause']) {
          this.pauseTimer();
          this.updatedTimer.emit(this.pausedAt);

        } else if (!changes.actionType.currentValue['start'] && !changes.actionType.currentValue['pause']) {
          if (this.timer['time']) {
            this.countdownValue = this.timer['time'];
          }
          else {
            this.countdownValue = 1000;
          }
          this.resetTimer();
        }
      }
    }
  }

  setCountdownValue(changes) {
    if (changes.timer) {
      if (changes.timer.currentValue && changes.timer.previousValue) {
        if (changes.timer.currentValue['time'] !== changes.timer.previousValue['time']) {
          if (changes.timer.currentValue['time'] == "") {
            this.countdownValue = 1000;
          }
          else {
            this.countdownValue = this.timer.time;
          }
          this.pausedAt = 0;
        }
      }
      else {
        if (this.pausedAt) {
          this.countdownValue = this.pausedAt;
        }
        else {
          this.countdownValue = 1000;
        }
      }
    }
  }

  resetTimer() {
    this.pausedAt = 0;
    this.pauseTimer();
  }

  pauseTimer() {
    this.pausedAt = this.countdownValue;
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
