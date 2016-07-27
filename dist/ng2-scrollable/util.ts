export function scrollTo(selector: string): void {
  let parentEl: HTMLElement, targetEl: HTMLElement;

  targetEl = <HTMLElement>document.querySelector(selector);
  if (!targetEl) {
    throw `Invalid selector ${selector}`;
  }

  parentEl = targetEl.parentElement;
  do {
    if (parentEl.getAttribute('ng2-scrollable') !== undefined) {
      break;
    }
  } while (parentEl = parentEl.parentElement);

  let parentElStyle = window.getComputedStyle(parentEl);
  parentEl = parentElStyle.overflow === 'auto' ? parentEl : document.body;

  let currentScrollTop = parentEl.scrollTop;
  let targetOffsetTop = targetEl.offsetTop;
  if (parentEl === document.body) {
    let bodyRect = document.body.getBoundingClientRect();
    let targetRect = targetEl.getBoundingClientRect();
    targetOffsetTop = targetRect.top - bodyRect.top;
  }

  let step = (targetOffsetTop - currentScrollTop) / 10;

  (function loop(i: number): void {
    setTimeout(function main() {
      parentEl.scrollTop += step;
      i > 1 && loop(i - 1);
    }, 50);
  }(10));
}

export function isElementPartlyVisible(innerEl: HTMLElement, outerEl: HTMLElement | Window): boolean {
  var innerRect = innerEl.getBoundingClientRect();
  if (outerEl === window) {
    return innerRect.top > 0 &&
      innerRect.top < window.innerHeight;
  } else {
    var outerRect = (<HTMLElement>outerEl).getBoundingClientRect();
    return innerRect.top >= outerRect.top && innerRect.top <= outerRect.bottom;
  }
}

export function isElementNotVisible(innerEl: HTMLElement, outerEl: HTMLElement | Window): boolean {
  var innerRect = innerEl.getBoundingClientRect();
  if (outerEl === window) {
    return innerRect.bottom < 0;
  } else {
    var outerRect = (<HTMLElement>outerEl).getBoundingClientRect();
    return innerRect.bottom < outerRect.top;
  }
}