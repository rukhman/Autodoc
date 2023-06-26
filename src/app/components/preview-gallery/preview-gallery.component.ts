import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

export interface PreviewImage {
  path: string;
  id: symbol
}

@Component({
  selector: 'ngx-preview-gallery',
  templateUrl: './preview-gallery.component.html',
  styleUrls: ['./preview-gallery.component.scss'],
})
export class PreviewGalleryComponent implements OnInit {
  @Output() images: EventEmitter<Array<PreviewImage>> = new EventEmitter();
  fileInput: FormControl = new FormControl();
  urls: Array<PreviewImage> = [];
  fullScreenImage: null | string = null

  constructor(private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {}

  onFileSelected(inputNode: HTMLInputElement): void {
    if(!inputNode?.files?.length) return
    const reader = new FileReader();
    reader.readAsDataURL(inputNode.files[0]);
    if(!inputNode.files[0].type.includes("image")) return
    reader.onload = (e: any) => {
      this.urls.push({
        path: e.target.result,
        id: Symbol("id")
      });
      this.cdr.detectChanges()
      this.images.emit(this.urls)
    };
  }

  delete(id: symbol): void {
    this.urls.forEach((item, index) => {
      if(item.id === id) {
        this.urls.splice(index, 1)
      }
    })
    this.images.emit(this.urls)
  }

  trackByFn(index: number, item: PreviewImage): symbol {
    return item.id
  }

  getUrl(path: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${path})`)
  }
}
