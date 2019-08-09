import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RcaRoutingModule } from './rca-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    RcaRoutingModule
  ],
  declarations: [IndexComponent]
})
export class RcaModule { }
