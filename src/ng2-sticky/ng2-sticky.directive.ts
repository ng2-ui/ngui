'use strict';

import { Directive, ElementRef, Input } from '@angular/core';
import { computedStyle } from '../ng2-utils/index';

@Directive({
  selector: '[ng2-sticky]'
})
export class Ng2StickyDirective {
  @Input('sticky-after') stickyAfter: string;  // css selector to be sticky after

  el: HTMLElement;
  parentEl: HTMLElement;
  fillerEl: HTMLElement;
  stickyOffsetTop: number = 0;


  diff: any;
  original: any;

  constructor(el: ElementRef) {
    this.el = this.el = el.nativeElement;
    this.parentEl = this.el.parentElement;
  }

  ngAfterViewInit(): void {
    this.el.style.boxSizing = 'border-box';
    
    if (this.stickyAfter) {
      let cetStickyAfterEl = document.querySelector(this.stickyAfter);
      if (cetStickyAfterEl) {
        this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
      }
    }

    // set the parent relatively positioned
    let allowedPositions = ['absolute', 'fixed', 'relative'];
    let parentElPosition = computedStyle(this.parentEl, 'position');
    if (allowedPositions.indexOf(parentElPosition) === -1) { //inherit, initial, unset
      this.parentEl.style.position = 'relative';
    }

    this.diff = {
      top: this.el.offsetTop - this.parentEl.offsetTop,
      left: this.el.offsetLeft - this.parentEl.offsetLeft
    };

    let elRect = this.el.getBoundingClientRect();
    this.original = {
      boundingClientRect: elRect,
      position: computedStyle(this.el, 'position'),
      float: computedStyle(this.el, 'float'),
      top:  computedStyle(this.el, 'top'),
      bottom:  computedStyle(this.el, 'bottom'),
      left: computedStyle(this.el, 'left'),
      width: computedStyle(this.el, 'width'),
      offsetTop: this.el.offsetTop,
      offsetLeft: this.el.offsetLeft,
      marginTop: parseInt(computedStyle(this.el, 'marginTop')),
      marginBottom: parseInt(computedStyle(this.el, 'marginBottom')),
      marginLeft: parseInt(computedStyle(this.el, 'marginLeft')),
      marginRight: parseInt(computedStyle(this.el, 'marginLeft'))
    };

    this.attach();
  }

  attach(): void {
    window.addEventListener('scroll', this.scrollHandler);
    window.addEventListener('resize', this.scrollHandler);
  }

  detach(): void {
    window.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.scrollHandler);
  }

  scrollHandler = () => {
    // let elRect: ClientRect = this.el.getBoundingClientRect();
    let parentRect: ClientRect = this.el.parentElement.getBoundingClientRect();
    let bodyRect: ClientRect = document.body.getBoundingClientRect();
    let dynProps;

    if (this.original.float === 'right') {
      let right = bodyRect.right - parentRect.right + this.original.marginRight;
      dynProps = { right: right + 'px' };
    } else if (this.original.float === 'left') {
      let left = parentRect.left - bodyRect.left + this.original.marginLeft;
      dynProps = { left: left + 'px'};
    } else {
      //console.log('parentRect..............', parentRect.width);
      dynProps = {width: parentRect.width + 'px'};
    }
    //console.log('dynProps', dynProps);

    if (this.original.marginTop + this.original.marginBottom +
      this.original.boundingClientRect.height + this.stickyOffsetTop >= parentRect.bottom) {
      /**
       * stikcy element reached to the bottom of the container
       */
      // console.log('case 1 (absolute)', parentRect.bottom, this.original.marginBottom);
      let floatAdjustment =
        this.original.float === 'right' ? {right: 0} :
        this.original.float === 'left' ? {left: 0} : {};
      Object.assign(this.el.style, {
        position: 'absolute',
        float: 'none',
        top: 'inherit',
        bottom: 0
      }, dynProps, floatAdjustment);
    } else if (parentRect.top * -1 + this.original.marginTop + this.stickyOffsetTop > this.original.offsetTop) {
      /**
       * stikcy element is in the middle of container
       */
      //console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);

      // if not floating, add an empty filler element, since the original elements becames 'fixed'
      if (this.original.float !== 'left' && this.original.float !== 'right' && !this.fillerEl) {
        this.fillerEl = document.createElement('div');
        this.fillerEl.style.height = this.el.offsetHeight + 'px';
        this.parentEl.insertBefore(this.fillerEl, this.el);
      }

      Object.assign(this.el.style, {
        position: 'fixed', //fixed is a lot smoother than absolute
        float: 'none',
        top: this.stickyOffsetTop + 'px',
        bottom: 'inherit'
      }, dynProps);
    } else {
      /**
       * stikcy element is in the original position
       */
      // console.log('case 3 (original)');
      if (this.fillerEl) {
        this.parentEl.removeChild(this.fillerEl); //IE11 does not work with el.remove()
        this.fillerEl = undefined;
      }
      Object.assign(this.el.style, {
        position: this.original.position,
        float: this.original.float,
        top: this.original.top,
        bottom: this.original.bottom,
        width: this.original.width,
        left: this.original.left
      }, dynProps);
    }
  }
}

