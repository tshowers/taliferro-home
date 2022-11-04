import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Nov012022Component } from './nov012022/nov012022.component';
import { Nov022022Component } from './nov022022/nov022022.component';
import { Nov032022Component } from './nov032022/nov032022.component';
import { Nov042022Component } from './nov042022/nov042022.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: '', component: ListComponent, data: { title: 'November Postings' } },
    { path: 'security-vulnerability-management-white-paper', component: Nov012022Component, data: { title: 'Security Vulnerability Management White Paper' } },
    { path: 'best-practices-for-network-systems', component: Nov022022Component, data: { title: 'Security Vulnerability Management White Paper' } },
    { path: 'modern-e-commerce-architecture', component: Nov032022Component, data: { title: 'Modern e-Commerce Architecture' } },
    { path: 'e-commerce-architecture-best-practices', component: Nov042022Component, data: { title: 'e-Commerce Architecture Best Practices' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class Nov2022RoutingModule { }
  