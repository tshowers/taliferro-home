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
import { Post21Component } from './post21/post21.component';
import { Post22Component } from './post22/post22.component';
import { Post23Component } from './post23/post23.component';
import { Post24Component } from './post24/post24.component';
import { Post25Component } from './post25/post25.component';
import { Post26Component } from './post26/post26.component';
import { Post27Component } from './post27/post27.component';
import { Post28Component } from './post28/post28.component';
import { Post29Component } from './post29/post29.component';
import { Post30Component } from './post30/post30.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: '', component: ListComponent, data: { title: 'September Postings' } },
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
    { path: 'how-to-lead-teams-to-develop-and-deliver-a-fantastic-product-our-customers-love-and-cant-live-without', component: Post14Component, data: { title: 'How to lead teams to develop and deliver a fantastic product our customers love and can\'t live without' } },
    { path: 'so-you-want-a-technology-thought-leader-well-here-are-some-thoughts', component: Post15Component, data: { title: 'So you want a technology thought leader well here are some thoughts' } },
    { path: 'how-to-improve-and-innovate-dev-ops-environments-and-ci-cd-processes', component: Post16Component, data: { title: 'How to improve and innovate dev ops environments and CI/CD processes' } },
    { path: 'the-top-five-reasons-our-laboratory-information-system-is-the-best', component: Post17Component, data: { title: 'The Top Five Reasons Our Laboratory Information System is the Best' } },
    { path: 'five-tips-on-preventing-medical-errors-when-ordering-lab-tests', component: Post18Component, data: { title: '5 Tips on Preventing Medical Errors when Ordering Lab Tests' } },
    { path: 'how-you-should-approach-a-stranger-about-your-product-or-service', component: Post19Component, data: { title: 'How you should approach a stranger about your product or service' } },
    { path: 'how-to-turn-your-fashion-and-apparel-online-store-into-a-sales-juggernaut', component: Post20Component, data: { title: 'How to turn your fashion and apparel online store into a sales juggernaut' } },
    { path: 'how-to-make-your-technology-infrastructure-future-proof', component: Post21Component, data: { title: 'How to make your technology infrastructure future proof' } },
    { path: 'why-you-might-want-to-use-our-crm-before-you-send-cold-call-emails-or-messages', component: Post22Component, data: { title: 'Why you might want to use our CRM before you send cold call emails or messages' } },
    { path: 'we-are-the-best-it-services-firm-in-seattle', component: Post23Component, data: { title: 'We\'re the best IT Services firm in Seattle' } },
    { path: 'my-experience-with-the-google-business-profile', component: Post24Component, data: { title: 'My Experience with the Google Business Profile' } },
    { path: 'how-to-create-the-perfect-e-commerce-shopping-experience', component: Post25Component, data: { title: 'How to create the perfect e-commerce shopping experience' } },
    { path: 'whats-the-benefit-of-a-customer-relationship-manager', component: Post26Component, data: { title: 'What\'s the benefit of a Customer Relationship Manager (CRM)' } },
    { path: 'what-makes-a-good-laboratory-information-system', component: Post27Component, data: { title: 'What makes a good Laboratory Information System' } },
    { path: 'social-media-marketing-requires-patience', component: Post28Component, data: { title: 'Social Media Marketing (SSM) requires patience, especially organic' } },
    { path: 'how-to-get-your-client-a-promotion', component: Post29Component, data: { title: 'How to get your client a promotion' } },
    { path: 'heres-how-you-can-achieve-e-commerce-excellence', component: Post30Component, data: { title: 'Here\'s how you can achieve e-commerce excellence' } },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class BlogRoutingModule { }
  