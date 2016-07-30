import { ElementRef, EventEmitter } from '@angular/core';
export declare class Ng2InfiniteListDirective {
    horizontal: boolean;
    endVisible: EventEmitter<{}>;
    el: HTMLElement;
    endEl: HTMLElement;
    elementVisible: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    scrollListener: () => void;
}
