/**
 * scroll to the selector within the parent selector by scrolling 10 times within 500ms
 * @param selector
 * @param parentSelector
 */
export function scrollTo(selector: string, parentSelector: string): void {
  console.log('selector', selector, 'parentSelector', parentSelector);
  let parentEl: HTMLElement, targetEl: HTMLElement;

  targetEl = <HTMLElement>document.querySelector(selector);
  if (!targetEl) { throw `Invalid selector ${selector}`; }

  parentEl = <HTMLElement>document.querySelector(parentSelector);
  if (!parentEl) { throw `Invalid parent selector ${parentSelector}`; }

  let parentElStyle: any = window.getComputedStyle(parentEl);
  parentEl = parentElStyle['overflow'] === 'auto' ? parentEl : document.body;

  let currentScrollTop = parentEl.scrollTop;
  let targetOffsetTop = targetEl.offsetTop;
  if (parentEl === document.body) {
    let bodyRect = document.body.getBoundingClientRect();
    let targetRect = targetEl.getBoundingClientRect();
    targetOffsetTop = targetRect.top - bodyRect.top;
  }

  let step = Math.ceil((targetOffsetTop - currentScrollTop) / 10);

  (function loop(i: number): void {
    setTimeout(function main() {
      parentEl.scrollTop += step;
      i > 1 && loop(i - 1);
    }, 50);
  }(10));
}
