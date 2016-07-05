import { Component, enableProdMode, ViewChild } from '@angular/core';
import {PartialDateTimePickerComponent} from "./partials/partial-datetime-picker.component";
import {PartialAutoCompleteComponent} from "./partials/partial-auto-complete.component";
import {PartialNg2MapComponent} from "./partials/partial-ng2-map.component";
import {PartialTabComponent} from "./partials/partial-tab.component";
import {PartialAccordionComponent} from "./partials/partial-accordion.component";
import {PartialOverlayComponent} from "./partials/partial-overlay.component";
import {PartialScrollableComponent} from "./partials/partial-scrollable.component";
import { Ng2ScrollableDirective } from "ng2-ui";

enableProdMode();

@Component({
  selector: 'my-app',
  // template: templateStr,
  directives: [ 
    PartialDateTimePickerComponent,
    PartialAutoCompleteComponent,
    PartialNg2MapComponent,
    PartialTabComponent,
    PartialAccordionComponent,
    PartialOverlayComponent,
    PartialScrollableComponent,
    Ng2ScrollableDirective
  ],
  template: `
    <div class="menu">
      <div class="icon" (click)="opened = !opened">&#9776;</div>
      <div class="items" *ngIf="opened">
        <ul>
          <li [class.current]="scrolled=='datetime-picker'" (click)="scrollTo('#datetime-picker')">Datetime Picker
          <li [class.current]="scrolled=='auto-complete'" (click)="scrollTo('#auto-complete')" >Autocomplete
          <li [class.current]="scrolled=='map'" (click)="scrollTo('#map')" >Map
          <li [class.current]="scrolled=='tab'" (click)="scrollTo('#tab')" >Tab
          <li [class.current]="scrolled=='accordion'" (click)="scrollTo('#accordion')" >Accordion
          <li [class.current]="scrolled=='overlay'" (click)="scrollTo('#overlay')" >Overlay
          <li [class.current]="scrolled=='scrollable'" (click)="scrollTo('#scrollable')" >Scrollable
        </ul> 
      </div>
    </div>
    <div ng2-scrollable (scrolledTo)="scrolled=$event" (click)="opened=false">
      <partial-datetime-picker id="datetime-picker"></partial-datetime-picker>
      <partial-auto-complete id="auto-complete"></partial-auto-complete>
      <partial-ng2-map id="map"></partial-ng2-map>
      <partial-tab id="tab"></partial-tab>
      <partial-accordion id="accordion"></partial-accordion>
      <partial-overlay id="overlay"></partial-overlay>
      <partial-scrollable id="scrollable"></partial-scrollable>
    </div>
  `,
  styles: [`
    .menu {
      position:fixed; top:0; left: 0;
      color: #fff;
      z-index: 10;
      background-color: #159957;
      background-image: linear-gradient(120deg, #155799, #156799);
      padding: 5px;
    }
    .menu .icon {
      padding: 5px;
      font-size: 24px;
    }
    .menu .items {
      width: 20%;
      min-width: 200px;
    }
    .menu .items ul {
      list-style: none; padding: 0
    }
    .menu .items ul li {
      padding: 5px 10px;
    }
    .menu .items ul li:hover {
      background-color: #ccc;
      color: #155799;
    }
    .menu .items ul li.current {
      background-color: #fff;
      color: #159957;
    }
  `]
})
export class AppComponent {
  scrollTo(selector) {
    Ng2ScrollableDirective.scrollTo(selector);
  }
}