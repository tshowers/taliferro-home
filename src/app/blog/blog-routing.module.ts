import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Post1Component } from './post1/post1.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { Post4Component } from './post4/post4.component';
import { Post5Component } from './post5/post5.component';
import { Post6Component } from './post6/post6.component';
import { Post7Component } from './post7/post7.component';
import { Post8Component } from './post8/post8.component';
import { Post9Component } from './post9/post9.component';
import { Post10Component } from './post10/post10.component';
import { Post11Component } from './post11/post11.component';
import { Post12Component } from './post12/post12.component';
import { Post13Component } from './post13/post13.component';
import { Post14Component } from './post14/post14.component';
import { Post15Component } from './post15/post15.component';
import { Post16Component } from './post16/post16.component';
import { Post17Component } from './post17/post17.component';
import { Post18Component } from './post18/post18.component';
import { Post19Component } from './post19/post19.component';
import { Post20Component } from './post20/post20.component';

const routes: Routes = [
    { path: 'dont-let-your-web-store-turn-into-a-desert', component: Post1Component, data: { title: 'Dont let your web store turn into a desert' } },
    { path: 'is-your-website-just-a-business-expense-or-is-it-making-you-money', component: Post2Component, data: { title: 'Is your website just a business expense or is it making you money' } },
    { path: 'oh-how-I-hate-passwords-and-2-factor-authentication', component: Post3Component, data: { title: 'Oh how I\'ve grown to hate passwords and 2-factor authentication' } },
    { path: 'we-are-not-a-social-media-marketing-company', component: Post4Component, data: { title: 'We are not a social media marketing company' } },
    { path: 'knowing-how-to-create-the-right-cloud-architecture', component: Post5Component, data: { title: 'Knowing how to create the right cloud architecture' } },
    { path: 'why-you-should-hire-taliferro-group-as-your-it-services-partner', component: Post6Component, data: { title: 'Why you should hire Taliferro Group as your IT Services Partner' } },
    { path: 'our-laboratory-information-system-will-have-your-lab-hummin', component: Post7Component, data: { title: 'Our Laboratory Information System will have your lab hummin' } },
    { path: 'how-to-increase-sales-with-cloud-technology', component: Post8Component, data: { title: 'How to increase sales with cloud technology' } },
    { path: 'using-a-crm-to-increase-sales', component: Post9Component, data: { title: 'Using a CRM to increase sales' } },
    { path: 'rest-in-peace', component: Post10Component, data: { title: 'REST in peace' } },
    { path: 'a-digital-marketing-strategy-in-a-recession', component: Post11Component, data: { title: 'A Digital Marketing strategy in a recession' } },
    { path: 'going-from-website-to-web-business', component: Post12Component, data: { title: 'Going from website to web business' } },
    { path: 'crm-meaning-marketing', component: Post13Component, data: { title: 'What does a CRM Meaning to Marketing' } },
    { path: 'how-to-lead-teams-to-develop-and-deliver-a-fantastic-product-our-customers-love-and-cant-live-without', component: Post14Component, data: { title: 'How to lead teams to develop and deliver a fantastic product our customers love and cant live without' } },
    { path: 'so-you-want-a-technology-thought-leader-well-here-are-some-thoughts', component: Post15Component, data: { title: 'So you want a technology thought leader well here are some thoughts' } },
    { path: 'how-to-improve-and-innovate-dev-ops-environments-and-ci-cd-processes', component: Post16Component, data: { title: 'How to improve and innovate dev ops environments and CI/CD processes' } },
    // { path: '', component: Post17Component, data: { title: '' } },
    // { path: '', component: Post18Component, data: { title: '' } },
    // { path: '', component: Post19Component, data: { title: '' } },
    // { path: '', component: Post20Component, data: { title: '' } },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class BlogRoutingModule { }
  