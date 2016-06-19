import { Component } from '@angular/core';
import { JUI_DIRECTIVES } from "jsvalley-ui/dist";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.tpl.html',
  directives: [ JUI_DIRECTIVES ]
})
export class AppComponent {

  public arrayOfKeyValues: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];

}