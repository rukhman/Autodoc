import { Directive } from '@angular/core';

@Directive({
  selector: '[preview-btn]',
  host: {
    '(click)': 'onClick()'
  }
})
export class PreviewBtnDirective {

  constructor() {}

  onClick() {
    const container = document.getElementsByTagName('ngx-preview-gallery')[0]
    const inp = container.getElementsByClassName('fileInput')[0]
    const clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": false
    });
    inp.dispatchEvent(clickEvent)
  }
}
