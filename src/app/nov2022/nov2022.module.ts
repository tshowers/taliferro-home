import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nov2022RoutingModule } from './nov2022-routing,module';
import { SharedModule } from '../shared/shared.module';

import { Nov012022Component } from './nov012022/nov012022.component';
import { Nov022022Component } from './nov022022/nov022022.component';
import { Nov032022Component } from './nov032022/nov032022.component';
import { Nov042022Component } from './nov042022/nov042022.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    Nov012022Component,
    Nov022022Component,
    Nov032022Component,
    Nov042022Component,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Nov2022RoutingModule
  ]
})
export class Nov2022Module { }
