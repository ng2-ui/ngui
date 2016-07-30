/**
 * Returns an element is visible within outer element
 * @param innerEl
 * @param outerEl
 * @param adjustment
 * @returns {{top: boolean, bottom: boolean, left: boolean, right: boolean}}
 */
export declare function elementVisible(innerEl: HTMLElement, outerEl: HTMLElement | Window, adjustment?: any): {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
};
