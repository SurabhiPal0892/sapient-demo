import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScorecardRoutingModule } from './scorecard-routing.module';
import { ScorecardComponent } from './scorecard.component';


@NgModule({
  declarations: [
    ScorecardComponent
  ],
  imports: [
    CommonModule,
    ScorecardRoutingModule
  ]
})
export class ScorecardModule { }
