import { ViewContainerRef } from '@angular/core';
import { OverlayManager } from './overlay-manager';
export declare class OverlayDirective {
    viewContainerRef: ViewContainerRef;
    overlayManager: OverlayManager;
    overlayOf: string;
    overlayPosition: string;
    el: HTMLElement;
    overlayEl: HTMLElement;
    constructor(viewContainerRef: ViewContainerRef, overlayManager: OverlayManager);
    ngAfterViewInit(): void;
    wrapItWithOverlayTag(): void;
    registerToOverlayManager(): void;
}
