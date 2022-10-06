import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
    { path: 'are-you-crippling-your-agile-team-with-procedure', component: Oct12022Component, data: { title: 'Are you crippling your Agile team with Procedure?' } },
    { path: 'what-makes-a-good-architecture-one-thats-based-on-academia-or-experience', component: Oct22022Component, data: { title: 'What makes good architecture, one that\'s based on academia or experience?' } },
    { path: 'api-security-checklist', component: Oct32022Component, data: { title: 'API Security Checklist' } },
    { path: 'restful-checklist', component: Oct42022Component, data: { title: 'Restful Checklist' } },
    { path: 'what-is-youtube-studio', component: Oct52022Component, data: { title: 'What is YouTube Studio' } },
    { path: 'we-used-our-website-as-a-use-case-to-speed-up-the-performance-and-this-is-what-we-found', component: Oct62022Component, data: { title: 'We used our website as a use case to speed up the performance, and this is what we found' } },
    { path: 'how-to-choose-a-custom-website-development-company', component: Oct72022Component, data: { title: 'How to choose a custom website development company' } },
    { path: 'architectural-cheat-sheet', component: Oct82022Component, data: { title: 'Architectural Cheat Sheet' } },
    { path: 'using-the-lighthouse-google-developer-tool-to-measure-your-websites-performance', component: Oct92022Component, data: { title: 'Using The Lighthouse Google Developer Tool to measure your website\'s performance' } },
    { path: 'the-taliferro-group-story', component: Oct102022Component, data: { title: 'The Taliferro Group Story' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class Blog2RoutingModule { }
  