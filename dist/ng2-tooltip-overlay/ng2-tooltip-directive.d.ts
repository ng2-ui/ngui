import { ViewContainerRef } from '@angular/core';
import { OverlayManager, Overlay } from 'ng2-overlay/index';
export declare class Ng2TooltipDirective {
    viewContainerRef: ViewContainerRef;
    overlayManager: OverlayManager;
    tooltip: string;
    el: HTMLElement;
    overlay: Overlay;
    constructor(viewContainerRef: ViewContainerRef, overlayManager: OverlayManager);
    ngAfterViewInit(): void;
    showTooltip($event: any): void;
    hideTooltip($event: any): void;
    getTooltipOverlay(el: any, tooltip: any): Overlay;
}
