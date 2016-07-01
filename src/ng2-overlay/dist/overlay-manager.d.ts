import { Overlay } from "./overlay";
export declare class OverlayManager {
    overlays: {
        [id: string]: Overlay;
    };
    register(overlay: Overlay): void;
    open(id: string): void;
    close(id: string): void;
}
