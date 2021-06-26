import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  countdownTimer = { time: 1000 };
  isPaused: any;
  isStart: any;
  pauseCount: any = 0;
  startCount: any = 0;
  counts: any;
  actionLog = { started: 'false', paused: 'false' };
  updatedTimer: any;
  nTime: any;
  constructor() { }

  ngOnInit() { }

  getUpdatedTimer(updatedTimer) {
    this.updatedTimer = updatedTimer;
  }

  getTimer(count) {
    this.nTime = count;
    this.countdownTimer = { time: this.nTime };
  }

  isPauseClicked(paused) {
    this.isPaused = paused;
    this.actionLog = { started: this.isStart, paused: this.isPaused };
  }

  isStartClicked(start) {
    this.isStart = start;
    this.actionLog = { started: this.isStart, paused: this.isPaused };
  }

  getPauseCounts(counts) {
    this.pauseCount = counts;
    this.counts = { start: this.startCount, pause: this.pauseCount };
  }

  getStartCounts(counts) {
    this.startCount = counts;
    this.counts = { start: this.startCount, pause: this.pauseCount };
  }
}
