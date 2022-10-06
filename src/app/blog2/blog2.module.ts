import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog2RoutingModule } from './blog2-routing.module';
import { BlogModule } from '../blog/blog.module';
import { Oct12022Component } from './oct12022/oct12022.component';
import { Oct22022Component } from './oct22022/oct22022.component';
import { Oct32022Component } from './oct32022/oct32022.component';
import { Oct42022Component } from './oct42022/oct42022.component';
import { Oct52022Component } from './oct52022/oct52022.component';
import { Oct62022Component } from './oct62022/oct62022.component';
import { Oct72022Component } from './oct72022/oct72022.component';
import { Oct82022Component } from './oct82022/oct82022.component';
import { Oct92022Component } from './oct92022/oct92022.component';
import { Oct102022Component } from './oct102022/oct102022.component';


@NgModule({
  declarations: [
    Oct12022Component,
    Oct22022Component,
    Oct32022Component,
    Oct42022Component,
    Oct52022Component,
    Oct62022Component,
    Oct72022Component,
    Oct82022Component,
    Oct92022Component,
    Oct102022Component
  ],
  imports: [
    CommonModule,
    BlogModule,
    Blog2RoutingModule
  ]
})
export class Blog2Module { }
