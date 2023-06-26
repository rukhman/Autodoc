import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-header',
  templateUrl: './news-header.component.html',
  styleUrls: ['./news-header.component.scss']
})
export class NewsHeaderComponent {
  path = environment.path
  constructor(public helper: HelperService) { }
}
