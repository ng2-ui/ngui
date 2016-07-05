import { Component, enableProdMode } from '@angular/core';
import { NG2_DIRECTIVES } from "ng2-ui";

@Component({
  selector: 'partial-auto-complete',
  template: `
    <h2 class="group-title">
      <a name="ng2-auto-complete" href="https://github.com/jsvalley/ng2-auto-complete">ng2-auto-complete</a>
    </h2>

    <div class="directive-group ng2-auto-complete">

      <h3> Autocomplete From Local Source - Array </h3>
      source:
      <pre>{{arrayOfStrings | json}}</pre>
      <input ng2-auto-complete
             [(ngModel)]="model1"
             [source]="arrayOfStrings"
             placeholder="enter text"/>
      <pre>selected: {{model1 | json}}</pre>
      <pre> &lt;input ng2-auto-complete
        [(ngModel)]="model1"
        [source]="arrayOfStrings"
        placeholder="enter text"/></pre>

      <h3> Autocomplete From Local Source - id/value </h3>
      source:
      <pre>{{arrayOfKeyValues | json}}</pre>
      <input
          ng2-auto-complete
          [(ngModel)]="model2"
          [source]="arrayOfKeyValues"
          placeholder="enter text"/>
      <pre>selected: {{model2 | json}}</pre>
      <pre>&lt;input
        ng2-auto-complete
        [(ngModel)]="model2"
        [source]="arrayOfKeyValues"
        placeholder="enter text"/></pre>

      <h3> Autocomplete From Local Source - key/name </h3>
      source:
      <pre>{{arrayOfKeyVaues2 | json}}</pre>
      <input ng2-auto-complete [source]="arrayOfKeyValues2"
             [(ngModel)]="model3"
             placeholder="enter text"
             value-property-name="key"
             display-property-name="name"/>
      <pre>selected: {{model3 | json}}</pre>
      <pre> &lt;input ng2-auto-complete [source]="arrayOfKeyValues2"
        [(ngModel)]="model3"
        placeholder="enter text"
        value-property-name="key"
        display-property-name="name"/></pre>

      <h3> Autocomplete From Remote Source - Google GeoCode </h3>
      <pre>source: {{googleGeoCode}}</pre>
      <input  ng2-auto-complete
              [(ngModel)]="model4"
              placeholder="Enter Address(min. 2 chars)"
              [source]="googleGeoCode"
              display-property-name="formatted_address"
              path-to-data="results"
              min-chars="2" />
      <pre>selected: {{model4 | json}}</pre>
      <pre>&lt;input  ng2-auto-complete
        [(ngModel)]="model4"
        placeholder="Enter Address(min. 2 chars)"
        [source]="googleGeoCode"
        display-property-name="formatted_address"
        path-to-data="results"
        min-chars="2" /></pre>

    </div>
  `,
  directives: [ NG2_DIRECTIVES ]
})
export class PartialAutoCompleteComponent {
  arrayOfStrings: string[] =
    ["this", "is", "array", "of", "text"];

  arrayOfKeyValues: any[] =
    [{id:1, value:'One'}, {id:2, value:'Two'}, {id:3, value:'Three'}, {id:4, value:'Four'}];

  arrayOfKeyValues2: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];

  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
  model4: any;
}