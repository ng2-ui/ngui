import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import {Ng2PopupComponent} from "./ng2-popup.component";
import {Ng2MessagePopupComponent} from "./ng2-message-popup.component";

import {Ng2OverlayModule} from 'ng2-overlay/index';

@NgModule({
  imports: [ BrowserModule, FormsModule, Ng2OverlayModule ],
  declarations: [Ng2MessagePopupComponent, Ng2PopupComponent],
  exports: [ Ng2MessagePopupComponent, Ng2PopupComponent ]
})
export class Ng2PopupModule {}
