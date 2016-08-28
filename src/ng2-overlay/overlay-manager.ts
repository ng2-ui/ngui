import {Injectable} from "@angular/core";

import {Overlay} from "./overlay";

@Injectable()
export class OverlayManager {
  //list of overlay objects
  static overlays: {[id: string]: Overlay} = {};

  register(overlay: Overlay): void {
    OverlayManager.overlays[overlay.id] = overlay;
    // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
  }

  open(arg: string | Overlay, event: Event): void {
    let overlay: Overlay = typeof arg === 'string' ? OverlayManager.overlays[arg] : arg;
    if (!overlay.opened) {
      overlay.positionIt(event);
      overlay.opened = true;
    }
  }

  close(arg: string | Overlay): void {
    let overlay: Overlay = typeof arg === 'string' ? OverlayManager.overlays[arg] : arg;
    overlay.element.style.display = 'none'
    overlay.opened = false;
  }
}

