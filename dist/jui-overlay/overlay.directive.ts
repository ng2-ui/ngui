import { Directive, ViewContainerRef, Input } from '@angular/core';

import {OverlayManager} from './overlay-manager';
import {Overlay} from './overlay';

@Directive({
  selector: '[jui-overlay], [jui-overlay-of], [jui-overlay-position]',
})
export class OverlayDirective {

  @Input('jui-overlay-of') overlayOf: string;
  @Input('jui-overlay-position') overlayPosition: string;

  el: HTMLElement;        // the element this directive is assigned to
  overlayEl: HTMLElement; // <jui-overlay> in <jui-overlay>this.el</jui-overlay>

  constructor(
    public viewContainerRef: ViewContainerRef,
    public overlayManager: OverlayManager
  ) {
    this.el = this.viewContainerRef.element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.wrapItWithOverlayTag();
    this.registerToOverlayManager();
  }

  wrapItWithOverlayTag() {
    //console.log('wrapped overlay directive element with <jui-overlay>');
    this.overlayEl = document.createElement('jui-overlay');
    this.overlayEl.style.display = 'none';

    this.el.parentElement.insertBefore(
      this.overlayEl, this.el.nextSibling
    );
    this.overlayEl.appendChild(this.el);
  }

  //create Overlay object,  then register this element to overlayManager
  registerToOverlayManager() {
    let positionStr: string =  this.overlayPosition;

    let overlay = new Overlay(this.overlayEl, {
      id: this.el.id,
      windowOverlay: this.overlayOf == "window",
      position: positionStr
    });
    //console.log('registering overlay', overlay);
    this.overlayManager.register(overlay);
  }

}