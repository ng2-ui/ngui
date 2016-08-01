import { ViewContainerRef } from '@angular/core';
export declare class Ng2TabComponent {
    private viewContainer;
    selectedIndex: string;
    selectedIndexClass: string;
    selectedContentsClass: string;
    el: HTMLElement;
    indexEls: HTMLElement[];
    contentsEls: HTMLElement[];
    constructor(viewContainer: ViewContainerRef);
    ngAfterViewInit(): void;
    selectTab(id: any): void;
    private addClass(el, str);
    private removeClass(el, str);
}
