import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'banner', loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule) },
      { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
      { path: 'timer', loadChildren: () => import('./timer-input/timer-input.module').then(m => m.TimerInputModule) },
      { path: 'scorecard', loadChildren: () => import('./scorecard/scorecard.module').then(m => m.ScorecardModule) },
      {
        path: 'blocks',
        loadChildren: () => import('./blocks/blocks.module').then(m => m.BlocksModule)
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
