import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelperService } from './services/helper.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  constructor(public helper: HelperService, private router: Router) {
  }
  ngOnInit(): void {
    this.router.events
    .pipe((takeUntil(this.destroy$)))
    .subscribe(url => {
      if(url instanceof NavigationEnd) {
        this.helper.isAddDisabled$.next(url.url !== '/' && innerWidth < 375);
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next('unsubscribe');
    this.destroy$.complete();
  }

  title = 'newsAutodoc';

  onResize(event: any): void {
    this.helper.innerWidth = event?.target?.innerWidth
  }
}
