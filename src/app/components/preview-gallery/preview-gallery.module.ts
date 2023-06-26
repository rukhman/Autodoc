import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreviewGalleryComponent } from './preview-gallery.component';
import { PreviewBtnDirective } from 'src/app/directives/preview-btn.directive';



@NgModule({
  declarations: [
    PreviewGalleryComponent,
    PreviewBtnDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    PreviewGalleryComponent,
    PreviewBtnDirective
  ]
})
export class PreviewGalleryModule { }
