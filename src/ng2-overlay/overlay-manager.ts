import {Injectable} from "@angular/core";

import {Overlay} from "./overlay";

@Injectable()
export class OverlayManager {
  //list of overlay objects
  overlays: {[id: string]: Overlay} = {};

  register(overlay: Overlay): void {
    this.overlays[overlay.id] = overlay;
  }

  open(arg: string | Overlay): void {
    let overlay: Overlay = typeof arg === 'string' ? this.overlays[arg] : arg;
    overlay.element.style.display = overlay.position.inside ? 'flex': 'block';
    overlay.positionIt();
  }

  close(arg: string | Overlay): void {
    let overlay: Overlay = typeof arg === 'string' ? this.overlays[arg] : arg;
    overlay.element.style.display = 'none'
  }
}