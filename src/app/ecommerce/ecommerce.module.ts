import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    EcommerceComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    ScrollingModule
  ]
})
export class EcommerceModule { }
