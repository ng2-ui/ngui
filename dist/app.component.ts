import { Component, enableProdMode } from '@angular/core';
import {PartialDateTimePickerComponent} from "./partials/partial-datetime-picker.component";
import {PartialAutoCompleteComponent} from "./partials/partial-auto-complete.component";
import {PartialNg2MapComponent} from "./partials/partial-ng2-map.component";
import {PartialTabComponent} from "./partials/partial-tab.component";
import {PartialAccordionComponent} from "./partials/partial-accordion.component";


@Component({
  selector: 'my-app',
  // template: templateStr,
  directives: [ 
    PartialDateTimePickerComponent,
    PartialAutoCompleteComponent,
    PartialNg2MapComponent,
    PartialTabComponent,
    PartialAccordionComponent
  ],
  template: `
    <partial-datetime-picker></partial-datetime-picker>
    <partial-auto-complete></partial-auto-complete>
    <partial-ng2-map></partial-ng2-map>
    <partial-tab></partial-tab>
    <partial-accordion></partial-accordion>
  `
})
export class AppComponent {}