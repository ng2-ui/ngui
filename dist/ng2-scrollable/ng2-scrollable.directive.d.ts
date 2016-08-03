import { ElementRef, EventEmitter } from '@angular/core';
export declare class Ng2ScrollableDirective {
    horizontal: boolean;
    elementVisible: EventEmitter<{}>;
    sections: Element[];
    el: HTMLElement;
    visible: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    private listenScrollOn(el);
    static scrollTo(selector: string, parentSelector?: string, horizontal?: boolean, distance?: number): void;
}
