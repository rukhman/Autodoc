import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from 'src/app/other/types';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news-catalog',
  templateUrl: './news-catalog.component.html',
  styleUrls: ['./news-catalog.component.scss']
})
export class NewsCatalogComponent implements OnInit {
  loading: boolean = false;
  constructor(public api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    if(this.loading) {
      return
    }
    this.loading = true;
    this.api.getNews()
    .subscribe({
      complete: () => {
        setTimeout(() => {
          this.loading = false;
        }, 100);
      }
    })
  }

  goToNewsItem(newsItem: NewsItem, event: Event): void {
    if(newsItem.id) {
      const path = newsItem.url
      const id = newsItem.id
      this.api.getNewsItem(path).subscribe(newsFull => {
        this.router.navigate(['news', id], {state: {data: newsFull}});
      })
    }
  }
}
