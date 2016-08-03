import { ElementRef } from '@angular/core';
export declare class Ng2StickyDirective {
    stickyAfter: string;
    el: HTMLElement;
    parentEl: HTMLElement;
    fillerEl: HTMLElement;
    stickyOffsetTop: number;
    diff: any;
    original: any;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    attach(): void;
    detach(): void;
    scrollHandler: () => void;
}
