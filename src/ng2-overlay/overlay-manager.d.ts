import { Overlay } from "./overlay";
export declare class OverlayManager {
    overlays: {
        [id: string]: Overlay;
    };
    register(overlay: Overlay): void;
    open(arg: string | Overlay): void;
    close(arg: string | Overlay): void;
}
