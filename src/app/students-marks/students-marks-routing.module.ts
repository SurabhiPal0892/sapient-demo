import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsMarksComponent } from './students-marks.component';

const routes: Routes = [
  {path:'',component:StudentsMarksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsMarksRoutingModule { }
