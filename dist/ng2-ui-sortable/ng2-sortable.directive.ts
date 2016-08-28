import {Component, ElementRef, ViewChild, Directive, ViewContainerRef, Output, EventEmitter} from '@angular/core'

@Directive({
  selector: '[ng2-sortable]'
})
export class Ng2SortableDirective {

  ulEl: HTMLElement;     // <ul>
  liEls: NodeListOf<Element>;     // <li> <li>
  draggingEl: HTMLElement;  // LI element that are currently dragging
  elDragEnter: HTMLElement; // dragging element is over at this element
  order: string[];            // order of LI ids

  @Output() orderChanged = new EventEmitter();

  constructor(public viewContainerRef: ViewContainerRef) {
    this.ulEl = this.viewContainerRef.element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.liEls =  this.ulEl.querySelectorAll('li');
    for (var i = 0; i < this.liEls.length; i++) {
      var liEl = <HTMLElement>this.liEls[i];
      // create a simple instance by default, it only adds horizontal recognizers
      var mc = new Hammer(liEl);
      // let the pan gesture support all directions.
      // this will block the vertical scrolling on a touch-device while on the element
      mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

      mc.on('panstart', this.dragStartHandler);
      mc.on('panup pandown', this.dragHandler);
      mc.on('panend', this.dragEndHandler);

      this.emitOrderChanged();
    }
  }

  dragStartHandler = event => {
    //console.log('dragStartHandler');
    this.draggingEl = event.target;
    Object.assign(this.draggingEl.style, {
      zIndex: 3,
      pointerEvents: 'none'
    });
  };

  dragHandler = event =>  {
    //console.log('dragHandler');
    Object.assign(this.draggingEl.style, {
      transform: 'translate(0px,' + event.deltaY + 'px)'
    });

    var newElDragEnter = <HTMLLIElement>document.elementFromPoint(event.center.x, event.center.y);
    if (this.elDragEnter !== newElDragEnter) {
      if (this.elDragEnter) {                // remove class
        this.elDragEnter.className = this.elDragEnter.className.replace(/\ drag-enter/g, '');
      }
      this.elDragEnter = newElDragEnter;
      if (newElDragEnter.tagName === 'LI') { // add class
        newElDragEnter.className += ' drag-enter';
      }
    }
  };

  dragEndHandler = event => {
    //console.log('dragEndHandler');
    Object.assign(this.draggingEl.style, {
      transform: 'translate(0,0)',
      zIndex: 1,
      pointerEvents: 'inherit'
    });
    // remove class and drop the element
    if (this.elDragEnter) {
      this.elDragEnter.className = this.elDragEnter.className.replace(/\ drag-enter/g, '');
      this.elDragEnter.parentNode.insertBefore(this.draggingEl, this.elDragEnter);
      this.emitOrderChanged();
    }
  };

  emitOrderChanged() {
    let liEls = this.ulEl.querySelectorAll('li');
    var orders = Array.prototype.slice.call(liEls).map(el => el.id);
    this.orderChanged.emit(orders);
  }
}
