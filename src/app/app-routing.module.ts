import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimerComponent } from './timer-input/timer/timer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'banner', loadChildren: () => import('./ui-design/ui-design.module').then(m => m.UiDesignModule) },
      { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
      { path: 'timer', loadChildren: () => import('./timer-input/timer-input.module').then(m => m.TimerInputModule) },
      { path: 'scorecard', loadChildren: () => import('./students-marks/students-marks.module').then(m => m.StudentsMarksModule) },
      {
        path: 'blocks',
        loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule)
      },
      {
        path: 'subject', loadChildren: () => import('./timer-subject/timer-subject.module').then(m => m.TimerSubjectModule)
      }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
