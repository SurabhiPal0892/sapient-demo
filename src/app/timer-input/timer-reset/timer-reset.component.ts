import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-reset',
  templateUrl: './timer-reset.component.html',
  styleUrls: ['./timer-reset.component.css']
})
export class TimerResetComponent implements OnInit {
  @Output() timelimit = new EventEmitter<{ time: any }>();
  @Output() isPaused = new EventEmitter();
  @Output() isStart = new EventEmitter();
  @Output() pauseCounts = new EventEmitter();
  @Output() startCounts = new EventEmitter();
  @Input() countdownTimer;
  pauseClick = 0;
  startClick = 0;
  arr: any = [];
  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.pauseClick > 0) {
      this.timelimit.emit(this.countdownTimer);
      this.arr.push(`Paused at ${this.countdownTimer}`);
    }
  }

  startClicked(timeLimit) {
    this.timelimit.emit({ time: timeLimit });
    this.isStart.emit('true');
    this.isPaused.emit('false');
    this.startClick++;
    this.startCounts.emit(this.startClick);
  }

  pauseClicked() {
    this.isStart.emit('false');
    this.isPaused.emit('true');
    this.pauseClick++;
    this.timelimit.emit({ time: this.countdownTimer });
    this.pauseCounts.emit(this.pauseClick);
  }

  resetClicked(timeLimit) {
    this.timelimit.emit({ time: timeLimit });
    this.isStart.emit('false');
    this.isPaused.emit('false');
    this.startClick = 0;
    this.pauseClick = 0;
    this.pauseCounts.emit(this.pauseClick);
    this.startCounts.emit(this.startClick);
  }
}
