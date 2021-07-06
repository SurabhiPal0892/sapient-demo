import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  countdownTimer = { time: 1000 };
  isPaused: boolean;
  isStart: boolean;
  pauseCount = 0;
  startCount = 0;
  updatedTimer: number;
  actionCount: { start: number; pause: number };
  actionType:{start:boolean,pause:boolean,reset:boolean};

  constructor() { }

  ngOnInit() { }

  getUpdatedTimer(updatedTimer) {
    this.updatedTimer = updatedTimer;
  }

  getTimer(count) {
    this.countdownTimer = { time:count.time  };
  }

  getActionCount(actionCount){
    this.actionCount=actionCount;
  }

  getActionType(actionType){
    this.actionType=actionType;
  }

  isPauseClicked(paused) {
    this.isPaused = paused;
  }

  isStartClicked(start) {
    this.isStart = start;
  }

  getPauseCounts(counts) {
    this.pauseCount = counts;
  }

  getStartCounts(counts) {
    this.startCount = counts;
  }
}
