export class Util {
  static getDocumentPosition(oElement: HTMLElement): any {
    let posX: number = 0, posY: number = 0;
    if(oElement.offsetParent) {
      for(;oElement; oElement = <HTMLElement>oElement.offsetParent) {
        posX += oElement.offsetLeft;
        posY += oElement.offsetTop;
      }
      return {x: posX, y: posY};
    } else {
      return {x: oElement['x'], y: oElement['y']};
    }
  }

  static getMousePositionInElement(evt: MouseEvent, element: HTMLElement) {
    evt = evt || <MouseEvent>window.event;

    let posX: number = 0, posY: number = 0;
    let elPos: any = this.getDocumentPosition(element);

    if (evt.pageX || evt.pageY) {
      posX = evt.pageX;
      posY = evt.pageY;
    } else if (evt.clientX || evt.clientY) {
      posX = evt.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posY = evt.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    return {
      x: posX - elPos.x,
      y: posY - elPos.y
    }
  }

}
