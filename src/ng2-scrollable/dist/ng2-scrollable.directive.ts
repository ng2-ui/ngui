import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ng2-scrollable]'
})
export class Ng2ScrollableDirective {

  @Output() scrolledTo = new EventEmitter();

  public sections: Element[] = [];
  public el: HTMLElement;

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
    console.log('adding scroll listener on', el, this.sections);
    el.addEventListener('scroll', () => {
      let scrolledTo: HTMLElement = null;
      for (let i=0; i< this.sections.length; i++) {
        if (this.isElementVisible(<HTMLElement>this.sections[i], <HTMLElement>el)) {
          scrolledTo = <HTMLElement>this.sections[i];
          break;
        }
      };
      scrolledTo && this.scrolledTo.emit(scrolledTo.id);
    })
  }

  static scrollTo(selector: string): void {
    let parentEl: HTMLElement, targetEl: HTMLElement;

    targetEl = <HTMLElement>document.querySelector(selector);
    if (!targetEl) {
      throw `Invalid selector ${selector}`;
    }

    parentEl = targetEl.parentElement;
    do {
      if (parentEl.getAttribute('ng2-scrollable') !== undefined) {
        break;
      }
    } while (parentEl = parentEl.parentElement);
    
    let parentElStyle = window.getComputedStyle(parentEl);
    parentEl = parentElStyle.overflow === 'auto' ? parentEl : document.body;

    let currentScrollTop = parentEl.scrollTop;
    let targetOffsetTop = targetEl.offsetTop;
    if (parentEl === document.body) {
      let bodyRect = document.body.getBoundingClientRect();
      let targetRect = targetEl.getBoundingClientRect();
      targetOffsetTop = targetRect.top - bodyRect.top;
    }

    let step = (targetOffsetTop - currentScrollTop) / 10;

    (function loop(i: number): void {
      setTimeout(function main() {
        parentEl.scrollTop += step;
        i > 1 && loop(i - 1);
      }, 50);
    }(10));
  }
  
  private isElementVisible(innerEl: HTMLElement, outerEl: HTMLElement | Window): boolean {
    var innerRect = innerEl.getBoundingClientRect();
    if (outerEl === window) {
      return innerRect.top > 0 &&
        innerRect.top < window.innerHeight;
    } else {
      var outerRect = (<HTMLElement>outerEl).getBoundingClientRect();
      return innerRect.top >= outerRect.top && innerRect.top <= outerRect.bottom;
    }
  }

}

