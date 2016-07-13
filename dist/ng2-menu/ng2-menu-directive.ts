import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ng2-menu]'
})
export class Ng2MenuDirective {

  @Input('ng2-menu') position: string;

  el: HTMLElement;

  constructor(public viewContainerRef: ViewContainerRef) {
    this.el = this.viewContainerRef.element.nativeElement;
    this.el.parentElement.style.position = 'relative';
    this.el.parentElement.className += ' has-ng2-menu';
  }
  
  ngAfterViewInit(): void {
    this.el.parentElement.addEventListener('mouseover', event => {
      this.el.parentElement.className += " active";
      this.el.style.position = "absolute";
      if (this.el.parentElement.offsetWidth) {
        this.setPosition();
      } else {
        setTimeout(() => this.setPosition())
      }
    });
    this.el.parentElement.addEventListener('mouseout', event => {
      this.el.parentElement.className = this.el.parentElement.className.replace(/\s?active/,'');
    });
  }

  setPosition() {
    if (this.position === "bottom") {
      this.el.style.left = "0";
      this.el.style.top = this.el.parentElement.offsetHeight - 1 + 'px';
    } else if (this.position === "top") {
      this.el.style.left = "0";
      this.el.style.bottom = this.el.parentElement.offsetHeight - 1 + 'px';
    } else if (this.position === "right") {
      this.el.style.left = this.el.parentElement.offsetWidth - 1 + 'px';
      this.el.style.top = "0";
    } else if (this.position === "left") {
      this.el.style.right = this.el.parentElement.offsetWidth - 1 + 'px';
      this.el.style.top = "0";
    }
  }
}
