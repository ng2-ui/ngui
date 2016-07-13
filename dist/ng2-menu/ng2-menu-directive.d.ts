import { ViewContainerRef } from '@angular/core';
export declare class Ng2MenuDirective {
    viewContainerRef: ViewContainerRef;
    position: string;
    el: HTMLElement;
    constructor(viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    setPosition(): void;
}
