import { ElementRef, EventEmitter } from '@angular/core';
export declare class Ng2ScrollableDirective {
    scrolledTo: EventEmitter<{}>;
    sections: Element[];
    el: HTMLElement;
    constructor(el: ElementRef);
    private ngAfterViewInit();
    private listenScrollOn(el);
    static scrollTo(selector: string): void;
    private isElementVisible(innerEl, outerEl);
}
