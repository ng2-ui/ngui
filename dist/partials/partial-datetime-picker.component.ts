import { Component, enableProdMode } from '@angular/core';
import { NG2_DIRECTIVES } from "ng2-ui";

@Component({
  selector: 'partial-datetime-picker',
  template: `
    <h2 class="group-title">
      <a name="ng2-datetime-picker" href="https://github.com/jsvalley/ng2-datetime-picker">ng2-datetime-picker</a>
    </h2>

    <div class="directive-group ng2-datetime-picker">

      <h3>Date Only</h3>
      <input [(ngModel)]="date1" ng2-datetime-picker date-only="true" />
      <pre>&lt;input [(ngModel)]="date1" ng2-datetime-picker date-only="true" /&gt;</pre>

      <h3>Current Date and Time</h3>
      <input [(ngModel)]="date2" ng2-datetime-picker [close-on-select]="false" />
      <pre>&lt;input  [(ngModel)]="date2" ng2-datetime-picker [close-on-select]="false" /&gt;</pre>

      <h3>Specific Date and Time</h3>
      <input [(ngModel)]="date3" ng2-datetime-picker year="2014" month="12" day="31" hour="23" minute='59'/>
      <pre>&lt;input ng-model="date3" ng2-datetime-picker year="2014" month="12" day="31" hour="23" minute='59'/&gt;</pre>

    </div>
  `,
  directives: [ NG2_DIRECTIVES ]
})
export class PartialDateTimePickerComponent {
  arrayOfStrings: string[] =
    ["this", "is", "array", "of", "text"];

  arrayOfKeyValues: any[] =
    [{id:1, value:'One'}, {id:2, value:'Two'}, {id:3, value:'Three'}, {id:4, value:'Four'}];

  arrayOfKeyValues2: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];

  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";

}