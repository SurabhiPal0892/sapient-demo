import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickCountsComponent } from './click-counts/click-counts.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerLogComponent } from './timer-log/timer-log.component';
import { TimerResetComponent } from './timer-reset/timer-reset.component';
import { TimerComponent } from './timer/timer.component';
import { TimerSubjectRoutingModule } from './timer-subject-routing.module';



@NgModule({
  declarations: [
    ClickCountsComponent,
    CountdownTimerComponent,
    TimerLogComponent,
    TimerResetComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    TimerSubjectRoutingModule
  ]
})
export class TimerSubjectModule { }
