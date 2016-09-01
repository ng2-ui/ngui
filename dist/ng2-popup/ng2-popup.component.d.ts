import { ComponentFactoryResolver } from '@angular/core';
import { OverlayManager } from '../ng2-overlay/index';
export declare class Ng2PopupComponent {
    private componentResolver;
    overlayManager: OverlayManager;
    marker: any;
    opened: boolean;
    closeButton: boolean;
    classNames: string;
    constructor(componentResolver: ComponentFactoryResolver, overlayManager: OverlayManager);
    ngAfterViewInit(): void;
    open(component: any, options: any): void;
    close(): void;
}
