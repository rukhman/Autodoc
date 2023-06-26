import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NewsItem } from 'src/app/other/types';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() card: NewsItem | null = null;
  noImage = '../../../assets/images/no_image.png';
}
