import { Component, enableProdMode } from '@angular/core';
import { JSVALLEY_DIRECTIVES } from "jsvalley-ui";

// enableProdMode();

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.tpl.html',
  directives: [ JSVALLEY_DIRECTIVES ]
})
export class AppComponent {
  
  public arrayOfKeyValues: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];
  
}
