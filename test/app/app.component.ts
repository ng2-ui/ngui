import { Component, enableProdMode } from '@angular/core';
import { NG2_DIRECTIVES, OverlayManager } from "ng2-ui";
import { HTTP_PROVIDERS } from '@angular/http';

console.log('ng2_directives', NG2_DIRECTIVES);
console.log('OverlayManager', OverlayManager);

@Component({
  selector: 'my-app',
  templateUrl: './app/app.tpl.html',
  directives: [ NG2_DIRECTIVES ],
  providers: [HTTP_PROVIDERS, OverlayManager]
})
export class AppComponent {
  constructor(public overlayManager: OverlayManager) {}
  
  public arrayOfKeyValues: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];
  
}
