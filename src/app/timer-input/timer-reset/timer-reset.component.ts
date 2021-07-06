import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-timer-reset',
  templateUrl: './timer-reset.component.html',
  styleUrls: ['./timer-reset.component.css']
})
export class TimerResetComponent implements OnInit {
  @Output() timelimit = new EventEmitter<{ time: any }>();
  @Output() actionType = new EventEmitter();
  @Output() actionCount = new EventEmitter();
  @Input() countdownTimer;
  pausedAt: any = [];
  startCount=0;
  pauseCount=0;
  showStart: boolean=true;
  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes:SimpleChange) {
    console.log(changes)
    if (this.countdownTimer) {
      this.pausedAt.push(`Paused at ${this.countdownTimer}`);
    }
  }

  updateTimerValue(time){
    this.timelimit.emit({time:time})
  }

  startClicked() {
    this.showStart=false;
    // this.timelimit.emit({ time: timeLimit });
    this.actionType.emit({start:true,pause:false,reset:false});
    this.startCount++;
    this.actionCount.emit({start:this.startCount,pause:this.pauseCount});
  } 

  pauseClicked() {
    this.showStart=true;
    this.pauseCount++;
    this.actionType.emit({start:false,pause:true,reset:false});
    this.actionCount.emit({start:this.startCount,pause:this.pauseCount});
  }

  resetClicked(timeLimit) {
    this.showStart=true;
    this.timelimit.emit({ time: timeLimit });
    this.startCount = 0;
    this.pauseCount = 0;
    this.pausedAt=[];
    this.actionType.emit({start:false,pause:false,reset:true});
    this.actionCount.emit({start:this.startCount,pause:this.pauseCount});
  }
}
