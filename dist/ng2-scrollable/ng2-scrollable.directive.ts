import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ng2-scrollable]',
  host: {
    '(scroll)': 'onScroll($event)'
  }
})
export class Ng2ScrollableDirective {

  @Output() scrolledTo = new EventEmitter();

  public sections: HTMLElement[] = [];
  public el;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.style.position = 'relative';
    this.el.scrollTo = this.scrollTo;
  }

  private scrollTo= (targetId) => {
    let targetEl = this.el.querySelector('#'+targetId);

    let currentScrollTop = this.el.scrollTop;
    let targetOffsetTop = targetEl.offsetTop;

    let step = (targetOffsetTop - currentScrollTop) / 10;

    var that = this;
    (function loop(i) {
      setTimeout(function main() {
        that.el.scrollTop += step;
        i > 1 && loop(i - 1);
      }, 50);
    }(10));
  }

  private onScroll() {
    let scrolledTo = null;
    for (let i=0; i< this.sections.length; i++) {
      if (this.isElementVisible(this.sections[i], this.el)) {
        scrolledTo = this.sections[i];
        break;
      }
    };
    this.scrolledTo.emit(scrolledTo.id);
  }

  // setup list of sections
  private ngAfterViewInit(): void {
    for (var i=0; i< this.el.children.length; i++) {
      let childEl = this.el.children[i];
      childEl.id && this.sections.push(childEl);
    }
  }

  private isElementVisible(innerEl, outerEl): boolean {
    var innerRect = innerEl.getBoundingClientRect();
    var outerRect = outerEl.getBoundingClientRect();
    return innerRect.top >= outerRect.top && innerRect.top <= outerRect.bottom;
  }

}

