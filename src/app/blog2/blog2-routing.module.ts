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
import { Oct112022Component } from './oct112022/oct112022.component';
import { Oct122022Component } from './oct122022/oct122022.component';
import { Oct132022Component } from './oct132022/oct132022.component';
import { Oct142022Component } from './oct142022/oct142022.component';
import { Oct172022Component } from './oct172022/oct172022.component';
import { Oct182022Component } from './oct182022/oct182022.component';
import { Oct192022Component } from './oct192022/oct192022.component';
import { Oct202022Component } from './oct202022/oct202022.component';
import { Oct212022Component } from './oct212022/oct212022.component';
import { Oct222022Component } from './oct222022/oct222022.component';
import { Oct242022Component } from './oct242022/oct242022.component';
import { Oct252022Component } from './oct252022/oct252022.component';
import { Oct262022Component } from './oct262022/oct262022.component';
import { Oct272022Component } from './oct272022/oct272022.component';
import { Oct282022Component } from './oct282022/oct282022.component';
import { Oct312022Component } from './oct312022/oct312022.component';

import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: '', component: ListComponent, data: { title: 'October Postings' } },
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
    { path: 'the-marriage-of-software-development-and-social-media-marketing', component: Oct112022Component, data: { title: 'The marriage of software development and social media marketing' } },
    { path: 'what-weve-learned-from-doing-our-own-social-media-marketing', component: Oct122022Component, data: { title: 'What we\'ve learned from doing our own Social Media Marketing' } },
    { path: 'leadership-isnt-about-platitudes-or-is-it', component: Oct132022Component, data: { title: 'Leadership isn\'t about platitudes, or is it?' } },
    { path: 'the-technical-aspects-of-tackling-multi-tenant-saas', component: Oct142022Component, data: { title: 'The technical aspects of Tackling Multi-tenant SaaS' } },
    { path: 'scaling-strategies', component: Oct172022Component, data: { title: 'Scaling Strategies' } },
    { path: 'are-you-suffering-from-app-fatigue', component: Oct182022Component, data: { title: 'Are you suffering from app fatigue?' } },
    { path: 'the-e-commerce-domain', component: Oct192022Component, data: { title: 'The e-Commerce Domain' } },
    { path: 'api-policies', component: Oct202022Component, data: { title: 'API Policies' } },
    { path: 'be-careful-of-adding-widgets-to-your-shopify-store', component: Oct212022Component, data: { title: 'Be careful of adding widgets to your Shopify store' } },
    { path: 'website-took-just-one-second-longer-to-load', component: Oct222022Component, data: { title: 'When I read Amazon would lose $1.6 billion a year if its website took just one second longer to load, I was amazed' } },
    { path: 'i-was-a-telecommunications-consultant-for-eight-years', component: Oct242022Component, data: { title: 'I was a telecommunications consultant for eight years - it is a different culture' } },
    { path: 'our-transformation-methodology-here-is-our-approach', component: Oct252022Component, data: { title: 'Our transformation methodology - here is our approach' } },
    { path: 'lack-of-resources-or-expertise-is-not-a-big-issue-for-companies', component: Oct262022Component, data: { title: 'Lack of Resources or Expertise is not a big issue for companies' } },
    { path: 'dont-take-cybersecurity-lightly', component: Oct272022Component, data: { title: 'Don\'t take Cybersecurity Lightly' } },
    { path: 'how-we-can-help-with-your-digital-transformation', component: Oct282022Component, data: { title: 'How we can help with your Digital Transformation' } },
    { path: 'e-commerce-scalability-strategy', component: Oct312022Component, data: { title: 'e-Commerce Scalability Strategy' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class Blog2RoutingModule { }
  