import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RcaRoutingModule } from './rca-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RcaRoutingModule
  ],
  declarations: [IndexComponent]
})
export class RcaModule { }
