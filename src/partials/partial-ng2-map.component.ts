import { Component, enableProdMode } from '@angular/core';
import { NG2_DIRECTIVES } from "ng2-ui";

@Component({
  selector: 'partial-ng2-map',
  template: `
    <h2 class="group-title ng2-map">
      <a name="ng2-map" href="https://github.com/jsvalley/ng2-map">ng2-map</a>
    </h2>
    <div class="directive-group">
      <ng2-map center="Brampton, Canada">
        <marker position="Brampton, Canada" draggable="true"></marker>
      </ng2-map>
      <pre>  &lt;ng2-map center="Brampton, Canada">
        &lt;marker position="Brampton, Canada" draggable="true">&lt;/marker>
      &lt;/ng2-map></pre>
    </div>
  `,
  directives: [ NG2_DIRECTIVES ]
})
export class PartialNg2MapComponent {
}