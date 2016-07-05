import { Component, enableProdMode } from '@angular/core';
import { NG2_DIRECTIVES, Ng2ScrollableDirective } from "ng2-ui";

@Component({
  selector: 'partial-scrollable',
  template: `
    <h2 class="group-title ng2-scrollable">
      <a name="ng2-overlay" href="https://github.com/jsvalley/ng2-scrollable">ng2-scrollable</a>
    </h2>
    <div class="directive-group">
      <ul style="padding-left: 25%">
        Scroll Within a Section<br/>
        <li [class.current]="id=='s1'" (click)="scrollTo('#s1')">1
        <li [class.current]="id=='s2'" (click)="scrollTo('#s2')">2
        <li [class.current]="id=='s3'" (click)="scrollTo('#s3')">3
        <li [class.current]="id=='s4'" (click)="scrollTo('#s4')">4
        <li [class.current]="id=='s5'" (click)="scrollTo('#s5')">5
        <li [class.current]="id=='s6'" (click)="scrollTo('#s6')">6
        <li [class.current]="id=='s7'" (click)="scrollTo('#s7')">7
        <li [class.current]="id=='s8'" (click)="scrollTo('#s8')">8
        <li [class.current]="id=='s9'" (click)="scrollTo('#s9')">9
      </ul>
      <div class="scrollable section" (scrolledTo)="id=$event" ng2-scrollable>
        <div id="s1">Section 1</div>
        <div id="s2">Section 2</div>
        <div id="s3">Section 3</div>
        <div id="s4">Section 4</div>
        <div id="s5">Section 5</div>
        <div id="s6">Section 6</div>
        <div id="s7">Section 7</div>
        <div id="s8">Section 8</div>
        <div id="s9">Section 9</div>
      </div>
      <pre>
&lt;ul style="padding-left: 25%">
  Scroll Within a Section&lt;br/>
  &lt;li [class.current]="id=='s1'" (click)="scrollTo('#s1')">1
  &lt;li [class.current]="id=='s2'" (click)="scrollTo('#s2')">2
  &lt;li [class.current]="id=='s3'" (click)="scrollTo('#s3')">3
  &lt;li [class.current]="id=='s4'" (click)="scrollTo('#s4')">4
  &lt;li [class.current]="id=='s5'" (click)="scrollTo('#s5')">5
  &lt;li [class.current]="id=='s6'" (click)="scrollTo('#s6')">6
  &lt;li [class.current]="id=='s7'" (click)="scrollTo('#s7')">7
  &lt;li [class.current]="id=='s8'" (click)="scrollTo('#s8')">8
  &lt;li [class.current]="id=='s9'" (click)="scrollTo('#s9')">9
&lt;/ul>
&lt;div class="scrollable section" (scrolledTo)="id=$event" ng2-scrollable>
  &lt;div id="s1">Section 1&lt;/div>
  &lt;div id="s2">Section 2&lt;/div>
  &lt;div id="s3">Section 3&lt;/div>
  &lt;div id="s4">Section 4&lt;/div>
  &lt;div id="s5">Section 5&lt;/div>
  &lt;div id="s6">Section 6&lt;/div>
  &lt;div id="s7">Section 7&lt;/div>
  &lt;div id="s8">Section 8&lt;/div>
  &lt;div id="s9">Section 9&lt;/div>
&lt;/div>
      </pre>
    </div>
  `,
  styles: [`
    ul {list-style: none}
    ul li {display: inline-block; border: 1px solid #ccc; padding: 10px}
    ul li.current { background: #ccc; color: #fff}
    .scrollable {height: 400px; border: 1px solid #ccc}
    .scrollable > div {height: 300px}
    .scrollable > div:nth-child(odd) { background-color: #ccc}

    ul.window {position: fixed; top: 160px; left: 0; width: 25%; padding: 0}
    ul.window li {display: block;}
    .scrollable.section {overflow:auto;}
  `],
  directives: [ NG2_DIRECTIVES ]
})
export class PartialScrollableComponent {
  scrollTo(selector) {
    Ng2ScrollableDirective.scrollTo(selector);
  }
}