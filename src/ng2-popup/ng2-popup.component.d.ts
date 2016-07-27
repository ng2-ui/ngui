import { Type, ComponentResolver } from '@angular/core';
import { OverlayManager } from '../ng2-overlay/index';
export declare class Ng2PopupComponent {
    componentResolver: ComponentResolver;
    overlayManager: OverlayManager;
    marker: any;
    opened: boolean;
    closeButton: boolean;
    classNames: string;
    constructor(componentResolver: ComponentResolver, overlayManager: OverlayManager);
    ngAfterViewInit(): void;
    open(component: Type, options: any): void;
    close(): void;
}
