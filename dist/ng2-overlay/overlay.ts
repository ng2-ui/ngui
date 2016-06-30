
export class Overlay {
  static TOP=11;  static MIDDLE=12; static BOTTOM=13;
  static LEFT=21; static CENTER=22; static RIGHT=23;

  id: string;
  element: HTMLElement;
  windowOverlay: boolean;
  position: any; //vertical, horizontal, inside

  constructor(el, options?: any) {
    options = options || {};
    this.id = options.id;
    if (!this.id) { throw "Invalid overlay id"}
    this.element = el;  // overlay wrapper element with table dsplay
    this.windowOverlay = options.windowOverlay;
    this.position = this.getPositionProperty(options.position || 'center center');
  }

  positionIt() {
    if (this.position.inside) {
      this.positionItInside(this.position);
    } else {
      this.positionItOutside(this.position);
    }
  }

  private getPositionProperty(positionStr: string): any {
    let position: any = {}, inside: boolean;
    let [vertical, horizontal, insideStr] = positionStr.split(' ');

    horizontal = horizontal || 'center';
    vertical = vertical || 'center';
    inside = (insideStr !== 'outside' || this.windowOverlay);

    position.horizontal = Overlay[horizontal.toUpperCase()];
    position.vertical = Overlay[vertical.toUpperCase()];
    position.inside  = inside;

    return position;
  }
  
  private positionItInside(position) {

    //top / left positioning
    if (this.windowOverlay) {
      this.element.style.position = 'fixed'
      //works as blocker
      Object.assign(this.element.style, {
        backgroundColor: 'rgba(0,0,0,0.2)',
        top: '0', left: '0', bottom: '0', right: '0',
        width: '100%', height: '100%'
      });
    } else {  //adjust top/left to match to parentElement
      //adjust top/left to match to parentElement
      let parentEl = this.element.parentElement;

      //works as a blocker 
      Object.assign(this.element.style, {
        position: 'absolute',
        // backgroundColor: 'transparent',
        backgroundColor: 'rgba(0,0,0,0.2)',
        top: parentEl.offsetTop + 'px',
        left: parentEl.offsetLeft + 'px',
        width: parentEl.offsetWidth + 'px',
        height: parentEl.offsetHeight + 'px'
      });

    };
    
    //horizontal position
    switch (position.horizontal) {
      case Overlay.LEFT:
        this.element.style.justifyContent = 'flex-start'; break;
      case Overlay.CENTER:
        this.element.style.justifyContent = 'center';  break;
      case Overlay.RIGHT:
        this.element.style.justifyContent = 'flex-end'; break;
    }

    //vertical position
    switch (position.vertical) {
      case Overlay.LEFT:
        this.element.style.alignItems = 'flex-start'; break;
      case Overlay.CENTER:
      case Overlay.MIDDLE:
        this.element.style.alignItems = 'center'; break;
      case Overlay.RIGHT:
        this.element.style.alignItems = 'flex-end'; break;
    }

  }

  private positionItOutside(position) {
    //adjust top/left to match to parentElement
    let parentEl = this.element.parentElement;
    
    //works as guide line?
    Object.assign(this.element.style, {
      position: 'absolute',
      pointerEvents: 'none',
      top:    parentEl.offsetTop + 'px',   //relative position to closet container
      left:   parentEl.offsetLeft + 'px',  //relative position to closet container
      width:  parentEl.offsetWidth  + 'px',
      height: parentEl.offsetHeight + 'px'
    });

    let elToPosition: HTMLElement = <HTMLElement>(this.element.children[0]);
    elToPosition.style.position = 'absolute';
    elToPosition.style.pointerEvents = 'auto';
    
    let childrenElBCR = elToPosition.getBoundingClientRect();
    let contentsWidth = childrenElBCR.width, contentsHeight = childrenElBCR.height;
    switch (position.vertical) {
      case Overlay.TOP:
        elToPosition.style.top = (contentsHeight * -1) +'px'; break;
      case Overlay.BOTTOM:
        elToPosition.style.bottom = (contentsHeight * -1) + 'px'; break;
      case Overlay.LEFT:
        elToPosition.style.left = (contentsWidth * -1) + 'px'; break;
      case Overlay.RIGHT:
        elToPosition.style.right = (contentsWidth * -1) + 'px'; break;
    }
    
    switch (position.horizontal) {
      case Overlay.CENTER:  
        elToPosition.style.left =  (parentEl.offsetWidth - contentsWidth) / 2 + 'px'; 
        break;
      case Overlay.LEFT:  elToPosition.style.left =  '0'; break;
      case Overlay.RIGHT: elToPosition.style.right = '0'; break;
      case Overlay.TOP: elToPosition.style.top = '0'; break;
      case Overlay.BOTTOM: elToPosition.style.bottom = '0'; break;
    }
    
  }
}
