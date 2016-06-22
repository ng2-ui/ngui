import { Component, enableProdMode } from '@angular/core';
import { JSVALLEY_DIRECTIVES } from "jsvalley-ui";

enableProdMode();

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.tpl.html',
  directives: [ JSVALLEY_DIRECTIVES ]
})
export class AppComponent {
  
  arrayOfStrings: string[] =
    ["this", "is", "array", "of", "text"];

  arrayOfKeyValues: any[] =
    [{id:1, value:'One'}, {id:2, value:'Two'}, {id:3, value:'Three'}, {id:4, value:'Four'}];

  arrayOfKeyValues2: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];

  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";

  model1: any;
  model2: any;
  model3: any;
  model4: any;
}