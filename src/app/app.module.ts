import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { AppRoutingModule } from './app-routing.module';
import { CountdownTimerComponent } from './timer-input/countdown-timer/countdown-timer.component';
import { TimerResetComponent } from './timer-input/timer-reset/timer-reset.component';
import { TimerLogComponent } from './timer-input/timer-log/timer-log.component';
import { ClickCountsComponent } from './timer-input/click-counts/click-counts.component';
import { TimerComponent } from './timer-input/timer/timer.component';
import { StudentsMarksComponent } from './students-marks/students-marks.component';
import { DynamicDivsComponent } from './dynamic-divs/dynamic-divs.component';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ScrollingModule, AppRoutingModule],
  declarations: [
    AppComponent,
    UiDesignComponent,
    EcommerceComponent,
    CountdownTimerComponent,
    TimerResetComponent,
    TimerLogComponent,
    ClickCountsComponent,
    TimerComponent,
    StudentsMarksComponent,
    DynamicDivsComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
