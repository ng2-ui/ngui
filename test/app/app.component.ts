import { Component, enableProdMode } from '@angular/core';
import { JSVALLEY_DIRECTIVES, OverlayManager } from "jsvalley-ui";
import { HTTP_PROVIDERS } from '@angular/http';

console.log('jsvalley_directives', JSVALLEY_DIRECTIVES);
console.log('OverlayManager', OverlayManager);

@Component({
  selector: 'my-app',
  templateUrl: './app/app.tpl.html',
  directives: [ JSVALLEY_DIRECTIVES ],
  providers: [HTTP_PROVIDERS, OverlayManager]
})
export class AppComponent {
  constructor(public overlayManager: OverlayManager) {}
  
  public arrayOfKeyValues: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];
  
}
