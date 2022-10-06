import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private _routeSubscription?: Subscription;
  private _pageTitle = environment.COMPANY_NAME;

  public constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _wowService: NgwWowService, private _titleService: Title) { }

  ngOnInit() {
    this._routeSubscription = this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data))
      .subscribe((event) => {
        this._wowService.init();
        this._pageTitle = event['title'] + ' - ' + environment.COMPANY_NAME;
        setTimeout(() => { this.setPageTitle() }, 1000);
      });
  }

  ngOnDestroy(): void {
    if (this._routeSubscription)
      this._routeSubscription.unsubscribe();
  }

  setPageTitle(): void {
    this._titleService.setTitle(this._pageTitle);
    if (!environment.production)
      console.log(this._pageTitle);
  }
}
