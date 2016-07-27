import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ng2-message-popup',
  template: `
    <div>
      <div class="popup-header">{{popupOptions.title}}</div>
      <div class="popup-body">{{popupOptions.message}}</div>
      <div class="popup-footer" *ngIf="popupOptions.buttons">
        <button *ngIf="popupOptions.buttons.OK"
          (click)="popupOptions.buttons.OK()">Ok</button>
        <button *ngIf="popupOptions.buttons.CANCEL"
          (click)="popupOptions.buttons.CANCEL()">Cancel</button>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .popup-header, .popup-body, .popup-footer {
      padding: 15px;
      text-align: center;
    }
    .popup-header  {
      font-weight: bold;
      font-size: 18px;
      border-bottom: 1px solid #ccc;
    }
  `] 
})
export class Ng2MessagePopupComponent {
  popupOptions: any;
}
