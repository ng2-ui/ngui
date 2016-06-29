import {Injectable} from "@angular/core";

import {Overlay} from "./overlay";

@Injectable()
export class OverlayManager {
  //list of overlay objects
  overlays: {[id: string]: Overlay} = {};

  register(overlay: Overlay): void {
    this.overlays[overlay.id] = overlay;
  }

  open(id: string): void {
    let overlay: Overlay = this.overlays[id];
    overlay.element.style.display = overlay.position.inside ? 'flex': 'block';
    overlay.positionIt();
  }

  close(id: string): void {
    let overlay = this.overlays[id];
    overlay.element.style.display = 'none'
  }
}