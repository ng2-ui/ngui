import { ViewContainerRef, EventEmitter } from '@angular/core';
export declare class Ng2SortableDirective {
    viewContainerRef: ViewContainerRef;
    ulEl: HTMLElement;
    liEls: NodeListOf<Element>;
    draggingEl: HTMLElement;
    elDragEnter: HTMLElement;
    order: string[];
    orderChanged: EventEmitter<{}>;
    constructor(viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    dragStartHandler: (event: any) => void;
    dragHandler: (event: any) => void;
    dragEndHandler: (event: any) => void;
    emitOrderChanged(): void;
}
