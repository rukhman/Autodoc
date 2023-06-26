import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsItem, NewsItemFull, NewsResponse } from '../other/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://webapi.autodoc.ru/api/news/';
  newsPageCount = 1;
  __cleanNewsList: NewsItem[] = [];
  __localStarageNewsList: NewsItem[] = [];
  commonNewsList$: BehaviorSubject<NewsItem[]> = new BehaviorSubject(<NewsItem[]>[])

  get localStarageNewsList(): NewsItem[] {
    if(this.__localStarageNewsList.length) {
      return this.__localStarageNewsList;
    } else {
      const localStorageString = localStorage.getItem('newsList')
      return localStorageString ? JSON.parse(localStorageString)[0] : [];
    }
  }

  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsResponse<NewsItem>>(this.baseUrl + `${this.newsPageCount++}/12`).pipe(map(data => {
      this.__cleanNewsList = [...this.__cleanNewsList, ...data.news]
      this.commonNewsList$.next([...this.localStarageNewsList, ...this.__cleanNewsList]);
      return [...this.localStarageNewsList, ...this.__cleanNewsList];
    }))
  }

  getNewsItem(endPoint: string): Observable<NewsItemFull> {
    return this.http.get<NewsItemFull>(this.baseUrl + `item/` + endPoint)
  }

  createNewNews(createNewNews: any): void {
    console.log(createNewNews);
    console.log(this.localStarageNewsList);
    console.log(this.__cleanNewsList);
    this.commonNewsList$.next([...this.localStarageNewsList, ...this.__cleanNewsList]);
  }
}
