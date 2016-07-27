import { ElementRef, EventEmitter } from '@angular/core';
import { scrollTo } from './util';
export declare class Ng2ScrollableDirective {
    scrolledToVisible: EventEmitter<{}>;
    scrolledToHidden: EventEmitter<{}>;
    sections: Element[];
    el: HTMLElement;
    static scrollTo: typeof scrollTo;
    constructor(el: ElementRef);
    private ngAfterViewInit();
    private listenScrollOn(el);
}
