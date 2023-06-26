import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';
import { PreviewGalleryComponent, PreviewImage } from '../preview-gallery/preview-gallery.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ViewChild('gallery') gallery!: PreviewGalleryComponent
  imgs: PreviewImage[] = [];
  newsForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })

  constructor(public helper: HelperService, private fb: FormBuilder, private api: ApiService) {
  }

  sendForm() {
    if (this.newsForm.valid) {
      const newsItem = {
        ...this.newsForm.value,
        titleImageUrl: this.imgs?.[0]?.path,
        publishedDate: new Date()
      }
      const localStorageString = localStorage.getItem('newsList')
      let newsList = []
      if(localStorageString) {
        newsList = JSON.parse(localStorageString)
        newsList = [newsItem, ...newsList[0]]
      } else {
        newsList.push(newsItem)
      }
      localStorage.setItem('newsList', JSON.stringify([newsList]))
      this.api.createNewNews(newsItem)
      this.close()
    }
  }

  close() {
    this.newsForm.reset()
    this.imgs = []
    this.helper.isModalOpened = false
    this.gallery.urls = []
  }

  showImgs(e: Array<PreviewImage>): void {
    this.imgs = e
  }

}
