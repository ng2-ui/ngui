export declare class Overlay {
    static TOP: number;
    static MIDDLE: number;
    static BOTTOM: number;
    static LEFT: number;
    static CENTER: number;
    static RIGHT: number;
    static CURSOR: number;
    id: string;
    element: HTMLElement;
    windowOverlay: boolean;
    opened: boolean;
    position: any;
    constructor(el: any, options?: any);
    positionIt(event?: Event): void;
    private getPositionProperty(positionStr);
    private positionItInside(position);
    private positionItOutside(position, event?);
}
