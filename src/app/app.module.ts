import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgwWowModule } from 'ngx-wow';
import { environment as env } from "src/environments/environment";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { TyroneShowersComponent } from './tyrone-showers/tyrone-showers.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { DataService } from './services/data.service';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { AboutComponent } from './about/about.component';
import { ModalBoxComponent } from './about/modal-box/modal-box.component';
import { PreloaderComponent } from './about/preloader/preloader.component';
import { HeaderAreaComponent } from './about/header-area/header-area.component';
import { BannerAreaComponent } from './about/banner-area/banner-area.component';
import { ServiceAreaComponent } from './about/service-area/service-area.component';
import { ProductAreaComponent } from './about/product-area/product-area.component';
import { TestimonialAreaComponent } from './about/testimonial-area/testimonial-area.component';
import { CounterAreaComponent } from './about/counter-area/counter-area.component';
import { BlogAreaComponent } from './about/blog-area/blog-area.component';
import { ContactAreaComponent } from './about/contact-area/contact-area.component';
import { CallToActionComponent } from './about/call-to-action/call-to-action.component';
import { FooterAreaComponent } from './about/footer-area/footer-area.component';
import { ProjectAreaComponent } from './about/project-area/project-area.component';
import { HeaderAreaLightComponent } from './about/header-area-light/header-area-light.component';
import { BreadCrumbLightComponent } from './about/bread-crumb-light/bread-crumb-light.component';
import { OffCanvasMenuComponent } from './about/off-canvas-menu/off-canvas-menu.component';
import { VideoAreaComponent } from './about/video-area/video-area.component';
import { ThankYouComponent } from './about/thank-you/thank-you.component';
import { BannerArea2Component } from './about/banner-area2/banner-area2.component';
import { SpecialAreaComponent } from './about/special-area/special-area.component';
import { ServiceArea2Component } from './about/service-area2/service-area2.component';
import { BenefitAreaComponent } from './about/benefit-area/benefit-area.component';
import { ApiDesignComponent } from './about/api-design/api-design.component';
import { AgileTrainingComponent } from './about/agile-training/agile-training.component';
import { CloudArchitectureComponent } from './about/cloud-architecture/cloud-architecture.component';
import { DataDesignComponent } from './about/data-design/data-design.component';
import { WebsiteOptimizationComponent } from './about/website-optimization/website-optimization.component';
import { WebsiteDevelopmentComponent } from './about/website-development/website-development.component';
import { ApigeeIntegrationComponent } from './about/apigee-integration/apigee-integration.component';
import { PayPerClickComponent } from './about/pay-per-click/pay-per-click.component';
import { SocialMediaMarketingComponent } from './about/social-media-marketing/social-media-marketing.component';
import { ECommerceArchitectureComponent } from './about/e-commerce-architecture/e-commerce-architecture.component';
import { DesignProcessAreaComponent } from './about/design-process-area/design-process-area.component';
import { AboutUsAreaComponent } from './about/about-us-area/about-us-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    TyroneShowersComponent,
    ReturnPolicyComponent,
    AboutComponent,
    ModalBoxComponent,
    PreloaderComponent,
    HeaderAreaComponent,
    BannerAreaComponent,
    ServiceAreaComponent,
    ProductAreaComponent,
    TestimonialAreaComponent,
    CounterAreaComponent,
    BlogAreaComponent,
    ContactAreaComponent,
    CallToActionComponent,
    FooterAreaComponent,
    ProjectAreaComponent,
    HeaderAreaLightComponent,
    BreadCrumbLightComponent,
    OffCanvasMenuComponent,
    VideoAreaComponent,
    ThankYouComponent,
    BannerArea2Component,
    SpecialAreaComponent,
    ServiceArea2Component,
    BenefitAreaComponent,
    ApiDesignComponent,
    AgileTrainingComponent,
    CloudArchitectureComponent,
    DataDesignComponent,
    WebsiteOptimizationComponent,
    WebsiteDevelopmentComponent,
    ApigeeIntegrationComponent,
    PayPerClickComponent,
    SocialMediaMarketingComponent,
    ECommerceArchitectureComponent,
    DesignProcessAreaComponent,
    AboutUsAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    RecaptchaModule,
    NgwWowModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent, data: { title: 'IT Services, Application and Website Development' } },
      { path: 'e-commerce-architecture', component: ECommerceArchitectureComponent, data: { title: 'e-Commerce Architecture' } },
      { path: 'api-design', component: ApiDesignComponent, data: { title: 'API Design' } },
      { path: 'agile-coaching', component: AgileTrainingComponent, data: { title: 'Agile Coaching' } },
      { path: 'cloud-architecture', component: CloudArchitectureComponent, data: { title: 'Cloud Architecture' } },
      { path: 'data-design', component: DataDesignComponent, data: { title: 'Data Design' } },
      { path: 'website-optimization', component: WebsiteOptimizationComponent, data: { title: 'Website Optimization' } },
      { path: 'website-development', component: WebsiteDevelopmentComponent, data: { title: 'Website Development' } },
      { path: 'apigee-integration', component: ApigeeIntegrationComponent, data: { title: 'APIGEE Integration' } },
      { path: 'social-media-marketing', component: SocialMediaMarketingComponent, data: { title: 'Social Media Marketing' } },
      { path: 'thank-you', component: ThankYouComponent, data: { title: 'Thank You!' } },
      { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { title: 'Privacy Policy' } },
      { path: 'terms-of-service', component: TermsComponent, data: { title: 'Terms of Service' } },
      { path: 'refund-policy', component: ReturnPolicyComponent, data: { title: 'Return Policy' } },
      { path: 'tyrone-showers', component: TyroneShowersComponent, data: { title: 'Tyrone Showers' } },
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
      { path: '**', component: NotFoundComponent, data: { title: '404 Not Found' } }
    ]),

  ],
  exports: [
    FormsModule, NgwWowModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
