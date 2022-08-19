import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { environment as env } from "src/environments/environment";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { TyroneShowersComponent } from './tyrone-showers/tyrone-showers.component';
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { DataService } from './services/data.service';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    TyroneShowersComponent,
    AboutComponent,
    ReturnPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'privacy-policy', component: PrivacyPolicyComponent},
      {path: 'terms-of-service', component: TermsComponent},
      {path: 'refund-policy', component: ReturnPolicyComponent},
      {path: 'tyrone-showers', component: TyroneShowersComponent},
      {path: '**', component: NotFoundComponent}
    ]),

  ],
  exports: [
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
