import {
  Component, 
  Type, 
  ViewChild, 
  Input,
  ViewContainerRef, 
  ComponentResolver, 
  ViewEncapsulation
} from '@angular/core';
import { OverlayManager, Overlay, OverlayDirective } from '../ng2-overlay/index';

@Component({
  selector: 'ng2-popup',
  directives: [ <Type>OverlayDirective ],
  providers: [ OverlayManager ],
  template: `
    <div id="ng2-popup-overlay"> <!-- <-- this is overlay -->
      <div class="popup-container {{classNames}}" [ngClass]="{opened: opened}">
        <div *ngIf="closeButton != false" class="close-popup" (click)="close()">x</div>
        <div class="marker" #marker></div> <!-- to position popup component -->
        <!-- popup component will be here -->
      </div>
    </div>
  `,
  styles: [`
    .popup-container { 
      background: #fff;
      border: 1px solid #ccc;
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
      border-radius: 5px;
      width: 600px;
      display: none;
    }
    .popup-container.opened { 
      display: block;
    }
    .close-popup {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      float: right; 
      cursor: pointer; 
      font-size: 21px;
      line-height: 1;
      text-shadow: 0 1px 0 #fff;
      opacity: 0.2;
      padding: 10px;
    }
    /*.marker ~ * { display:block; background: #fff}*/
    .popup-container.small { width: 300px}
    .popup-container.large { width: 900px}
  `],
  encapsulation: ViewEncapsulation.None
})
export class Ng2PopupComponent {
  @ViewChild('marker', {read: ViewContainerRef}) marker;

  opened: boolean;
  closeButton: boolean;
  classNames: string;
  
  constructor(
    public componentResolver: ComponentResolver,
    public overlayManager: OverlayManager
  ) {}
  
  ngAfterViewInit() {
    let overlayEl = this.marker.element.nativeElement.parentElement.parentElement;
    
    let overlay = new Overlay(overlayEl, {
      id: 'ng2-popup-overlay',
      windowOverlay: true,
      position: 'center center'
    });
    this.overlayManager.register(overlay);
  }

  open(component: Type, options: any) {
    this.close();
    this.opened = true;
    this.classNames = options.classNames;
    this.closeButton = options.closeButton;
    this.componentResolver.resolveComponent(component).then(factory => {
      let componentRef = this.marker.createComponent(factory);
      componentRef.instance.popupOptions = options;
      componentRef.instance.popup = this;
      this.overlayManager.open('ng2-popup-overlay', null); //(id, event)
    });
  }

  close() {
    this.opened = false;
    this.overlayManager.close('ng2-popup-overlay');
    try { this.marker.remove(); } catch(e) {}
  }
}
