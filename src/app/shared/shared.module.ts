import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderAreaLightComponent } from './header-area-light/header-area-light.component';
import { BreadCrumbLightComponent } from './bread-crumb-light/bread-crumb-light.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';
import { OffCanvasMenuComponent } from './off-canvas-menu/off-canvas-menu.component';
import { TyroneShowersBioComponent } from './tyrone-showers-bio/tyrone-showers-bio.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { PostsHistoryComponent } from './posts-history/posts-history.component';

@NgModule({
    declarations: [
        HeaderAreaLightComponent,
        BreadCrumbLightComponent,
        FooterAreaComponent,
        OffCanvasMenuComponent,
        TyroneShowersBioComponent,
        RecentPostsComponent,
        PostsHistoryComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule

    ],
    exports: [
        FormsModule,
        HttpClientModule,
        RouterModule,
        HeaderAreaLightComponent,
        BreadCrumbLightComponent,
        FooterAreaComponent,
        OffCanvasMenuComponent,
        TyroneShowersBioComponent,
        RecentPostsComponent,
        PostsHistoryComponent
    ]
})
export class SharedModule { }