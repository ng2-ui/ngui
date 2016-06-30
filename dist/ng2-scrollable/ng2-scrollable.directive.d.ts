import { ElementRef, EventEmitter } from '@angular/core';
export declare class Ng2ScrollableDirective {
    scrolledTo: EventEmitter<{}>;
    sections: HTMLElement[];
    el: any;
    constructor(el: ElementRef);
    private scrollTo;
    private onScroll();
    private ngAfterViewInit();
    private isElementVisible(innerEl, outerEl);
}
