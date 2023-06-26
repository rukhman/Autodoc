import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsCatalogComponent } from './components/news-catalog/news-catalog.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { HttpClientModule } from '@angular/common/http';
import { InViewportModule } from 'ng-in-viewport';
import { NewsHeaderComponent } from './components/news-header/news-header.component';
import { NewsComponent } from './components/news/news.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PreviewGalleryModule } from './components/preview-gallery/preview-gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    NewsCatalogComponent,
    NewsCardComponent,
    NewsHeaderComponent,
    NewsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InViewportModule,
    ReactiveFormsModule,
    PreviewGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
