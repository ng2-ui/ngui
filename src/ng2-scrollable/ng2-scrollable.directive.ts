import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { elementVisible } from '../ng2-utils/index';

@Directive({
  selector: '[ng2-scrollable]'
})
export class Ng2ScrollableDirective {

  @Input() horizontal: boolean;
  @Output() elementVisible = new EventEmitter();

  sections: Element[] = [];
  el: HTMLElement;
  visible: any = elementVisible;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.style.position = 'relative';
  }

  // setup list of sections
  ngOnInit(): void {
    for (var i = 0; i< this.el.children.length; i++) {
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
      for (let i = 0; i< this.sections.length; i++) {
        let section = <HTMLElement>this.sections[i];
        let visible = this.visible(section, <HTMLElement>el);
        if (this.horizontal && (visible.left || visible.right)) {
          elScrolledToVisible = section;
          break;
        } else if (!this.horizontal && (visible.top || visible.bottom)) {
          elScrolledToVisible = section;
          break;
        }
      }
      elScrolledToVisible && this.elementVisible.emit(elScrolledToVisible)
    });
  }

  static scrollTo(
    selector: string,
    parentSelector?: string,
    horizontal? : boolean,
    distance? : number
  ): void {
    // argument validation
    let parentEl: HTMLElement, targetEl: HTMLElement;
    parentSelector = parentSelector || 'body';
    targetEl = <HTMLElement>document.querySelector(selector);
    if (!targetEl) { throw `Invalid selector ${selector}`; }
    parentEl = <HTMLElement>document.querySelector(parentSelector);
    if (!parentEl) { throw `Invalid parent selector ${parentSelector}`; }

    // detect the current environment
    let parentElStyle = window.getComputedStyle(parentEl);
    let scrollContainerEl = parentElStyle.overflow === 'auto' ?
      parentEl : document.body;
    let currentScrollTop = scrollContainerEl.scrollTop;
    let currentScrollLeft = scrollContainerEl.scrollLeft;

    // determine targetOffsetTop(or Left);
    let targetOffsetTop: number;
    let targetOffsetLeft: number;
    if (scrollContainerEl === document.body) {
      let bodyRect = document.body.getBoundingClientRect();
      let targetRect = targetEl.getBoundingClientRect();
      targetOffsetTop = targetRect.top - bodyRect.top;
      targetOffsetLeft = targetRect.left - bodyRect.left;
    } else {
      targetOffsetTop = targetEl.offsetTop;
      targetOffsetLeft = targetEl.offsetLeft;
    }
    if (distance) {
      currentScrollTop += distance;
      currentScrollLeft += distance;
    }


    // start scrolling
    let step = horizontal ?
      Math.ceil((targetOffsetLeft - currentScrollLeft) / 10) :
      Math.ceil((targetOffsetTop - currentScrollTop) / 10);
    let scrollProp = horizontal ? 'scrollLeft' : 'scrollTop';
    (function loop(i: number, prop: any): void {
      setTimeout(function main() {
        scrollContainerEl[prop] += step;
        i > 1 && loop(i - 1, prop);
      }, 50);
    }(10, scrollProp));
  }

}
