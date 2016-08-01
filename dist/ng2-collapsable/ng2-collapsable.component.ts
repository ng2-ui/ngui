import {
  Input,
  Component,
  ViewEncapsulation,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'ng2-collapsable, [ng2-collapsable]',
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`,
  styles: [`
    [ng2-collapsable] [index] {
      display: block;
      cursor: pointer;
      position: relative;
      margin: 2px 0 0 0;
      padding: .5em .5em .5em .7em;
      border: 1px solid #cccccc;
      background: #ededed;
      font-weight: normal;
      border-radius: 2px; 
      color: #2b2b2b;
    }
    [ng2-collapsable] [index].selected {
      border: 1px solid #003eff;
      background: #007fff;
      color: #ffffff;
      border-radius: 2px 2px 0 0;
    }
    [ng2-collapsable] [contents] {
      border-top: 0;
      background: #ffffff;
      color: #333333;
      border-radius: 0 0 2px 2px;
      transition: height 0.3s ease-in;
      height: 0;
      border: 0;
      font-size: 0;
    }
    [ng2-collapsable] [contents].selected {
      height: 50px;
      border: 1px solid #dddddd;
      font-size: inherit;
    }
  `],
})
export class Ng2CollapsableComponent {
  @Input('selected') selectedIndex: string;
  @Input('selected-index-class') selectedIndexClass: string = 'selected';
  @Input('selected-contents-class') selectedContentsClass: string = 'selected';

  el: HTMLElement;
  indexEls:  HTMLElement[];
  contentsEls: HTMLElement[];

  constructor(private viewContainer: ViewContainerRef) {
    this.el = this.viewContainer.element.nativeElement;
  }

  ngAfterViewInit() {
    this.indexEls = [].slice.call(this.el.querySelectorAll('[index]'));
    this.contentsEls = [].slice.call(this.el.querySelectorAll('[contents]'));
    this.selectTab(this.selectedIndex);
    this.indexEls.forEach(el => {
      el.addEventListener('click', () => {
        this.selectTab(el.getAttribute('index'));
      })
    })
  }

  selectTab(id) {
    id = id || this.indexEls[0].getAttribute('index');

    this.indexEls.forEach(el => {
      this.removeClass(el, this.selectedIndexClass);
      if (el.getAttribute('index') == id) {
        this.addClass(el, this.selectedIndexClass);
      }
    });

    this.contentsEls.forEach(el => {
      this.removeClass(el, this.selectedContentsClass);
      if (el.getAttribute('contents') == id) {
        this.addClass(el, this.selectedContentsClass);
      }
    })

  }

  private addClass(el, str) {
    let classNames = (el.className ||'').split(' ');
    classNames.push(str);
    el.className = classNames.join(' ');
  }

  private removeClass(el, str) {
    el.className = (el.className ||'').replace(
      new RegExp('[ ]*'+ str), ''
    );
  }
}
