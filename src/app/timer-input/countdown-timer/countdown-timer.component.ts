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
  @Input() timer = { time: 1000 };
  @Input() pause: any;
  @Input() start: any;
  @Output() updatedTimer = new EventEmitter();
  interval: any;
  previousValue: any;
  countdown: any;
  newTimer: any;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (this.start == 'true' && this.pause == 'false') {
      this.startTimer();
    } else if (this.pause == 'true' && this.start == 'false') {
      this.pauseTimer();
    } else if (this.pause == 'false' && this.start == 'false') {
      this.resetTimer();
    }
  }

  resetTimer() { }

  pauseTimer() {
    this.updatedTimer.emit(this.timer.time);
    clearInterval(this.interval);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer['time'] > 0) {
        this.timer['time']--;
      }
    }, 1000);
  }
}
