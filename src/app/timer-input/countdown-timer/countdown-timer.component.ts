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
  @Input() timer:any;
  @Input() actionType:any;
  @Output() updatedTimer = new EventEmitter();
  interval: any;
  countdownTimer=1000;
  pausedAt: any;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if(this.actionType){
    if (this.actionType.start && !this.actionType.pause) {
      this.startTimer();
    } else if (!this.actionType.start && this.actionType.pause) {
      this.pauseTimer();
      this.updatedTimer.emit(this.pausedAt);

    } else if (!this.actionType.start && !this.actionType.pause) {
      if(this.timer['time'] && this.timer['time']!==""){
      this.countdownTimer=this.timer['time'];
      }
      else{
        this.countdownTimer=1000;
      }
      this.resetTimer();
    }
  }
  }

  resetTimer() {
    this.pausedAt=0;
    this.pauseTimer();
   }

  pauseTimer() {
    this.pausedAt=this.countdownTimer;
    clearInterval(this.interval);
  }

  startTimer() {
    if(this.pausedAt){
      this.countdownTimer=this.pausedAt;
    }
    else{
      if(this.timer.time){
        this.countdownTimer=this.timer.time;
      }
      else{
        this.countdownTimer=1000;
      }
    }
    this.interval = setInterval(() => {
      if (this.countdownTimer > 0) {
        this.countdownTimer--;
      }
    }, 1000);
  }
}
