import { Directive, ViewContainerRef, Input } from '@angular/core';

import {OverlayManager, Overlay} from 'ng2-overlay/index';

@Directive({
  selector: '[ng2-tooltip]',
  host: {
    '(mouseover)': 'showTooltip($event)',
    '(mouseout)': 'hideTooltip($event)'
  }
})
export class Ng2TooltipDirective {

  @Input('ng2-tooltip') tooltip: string;

  el: HTMLElement;
  overlay: Overlay;

  constructor(
    public viewContainerRef: ViewContainerRef,
    public overlayManager: OverlayManager
  ) {
    this.el = this.viewContainerRef.element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.overlay = this.getTooltipOverlay(this.el, this.tooltip);
  }

  showTooltip($event) {
    this.overlayManager.open(this.overlay, $event);
    $event.stopPropagation();
  }

  hideTooltip($event) {
    this.overlayManager.close(this.overlay);
    $event.stopPropagation();
  }

  getTooltipOverlay(el, tooltip) {
    let tooltipEl = document.createElement('ng2-tooltip');
    tooltipEl.style.display = 'none';
    let divEl = document.createElement('div');
    divEl.innerHTML = `
       <div class='tooltip-contents'>${tooltip}</div>
       <div class='tooltip-down-arrow'></div>
    `;
    tooltipEl.appendChild(divEl);

    //el.parentElement.insertBefore(tooltipEl, el.nextSibling);
    el.appendChild(tooltipEl);

    let overlay = new Overlay(tooltipEl, {
      id: 'tooltip-' + (el.id || Math.floor(Math.random()*1000000)),
      position: 'top cursor outside'
    });
    this.overlayManager.register(overlay);
    return overlay;
  }
}
