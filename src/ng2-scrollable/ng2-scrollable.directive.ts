import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { isElementPartlyVisible, isElementNotVisible, scrollTo } from './util';

@Directive({
  selector: '[ng2-scrollable]'
})
export class Ng2ScrollableDirective {

  @Output() scrolledToVisible = new EventEmitter();
  @Output() scrolledToHidden  = new EventEmitter();

  sections: Element[] = [];
  el: HTMLElement;
  static scrollTo = scrollTo;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.style.position = 'relative';
  }

  // setup list of sections
  private ngAfterViewInit(): void {
    for (var i=0; i< this.el.children.length; i++) {
      let childEl = this.el.children[i];
      childEl.id && this.sections.push(childEl);
    }

    let thisElStyle = window.getComputedStyle(this.el);
    let elToListenScroll = thisElStyle.overflow === 'auto' ? this.el : window;
    this.listenScrollOn(elToListenScroll);
  }

  private listenScrollOn(el: HTMLElement | Window): void {
    (<HTMLElement>el).addEventListener('scroll', () => {
      let elScrolledToVisible: HTMLElement = null;
      let elScrolledToHidden: HTMLElement = null;
      for (let i=0; i< this.sections.length; i++) {
        if (isElementPartlyVisible(<HTMLElement>this.sections[i], <HTMLElement>el)) {
          elScrolledToVisible = <HTMLElement>this.sections[i];
          break;
        }
        if (isElementNotVisible(<HTMLElement>this.sections[i], <HTMLElement>el)) {
          elScrolledToHidden = <HTMLElement>this.sections[i];
        }
      }
      elScrolledToVisible && this.scrolledToVisible.emit(elScrolledToVisible.id);
      elScrolledToHidden  && this.scrolledToHidden.emit(elScrolledToHidden.id);
    })
  }

}

