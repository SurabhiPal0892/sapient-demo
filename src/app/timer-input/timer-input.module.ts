import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerInputRoutingModule } from './timer-input-routing.module';
import { TimerComponent } from './timer/timer.component';
import { ClickCountsComponent } from './click-counts/click-counts.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerLogComponent } from './timer-log/timer-log.component';
import { TimerResetComponent } from './timer-reset/timer-reset.component';


@NgModule({
  declarations: [
    TimerComponent,
    ClickCountsComponent,
    CountdownTimerComponent,
    TimerLogComponent,
    TimerResetComponent
  ],
  imports: [
    CommonModule,
    TimerInputRoutingModule
  ]
})
export class TimerInputModule { }
