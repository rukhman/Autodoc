import { Component, Input, OnInit } from '@angular/core';
import { NewsItemFull } from 'src/app/other/types';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() newsItem: NewsItemFull = window.history.state.data
  constructor() {}
  ngOnInit() {
  }
}
