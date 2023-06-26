import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-news-header',
  templateUrl: './news-header.component.html',
  styleUrls: ['./news-header.component.scss']
})
export class NewsHeaderComponent {
  constructor(public helper: HelperService) { }
}
