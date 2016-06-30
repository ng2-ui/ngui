import { Component, enableProdMode } from '@angular/core';

@Component({
  selector: 'partial-tab',
  template: `
    <h2 class="group-title"><a name="tab">tab</a></h2>

    <div class="directive-group">
      <ul class="tabs">
        <li class="tab" (click)="tab=1" [class.current]="!tab || tab == 1">Tab 1</li>
        <li class="tab" (click)="tab=2" [class.current]="tab == 2">Tab 2</li>
        <li class="tab" (click)="tab=3" [class.current]="tab == 3">Tab 3</li>
      </ul>
      <div class="tab-contents">
        <div *ngIf="!tab || tab == 1">
          Tab Contents 1<br/> Tab Contents 1<br/>Tab Contents 1<br/>Tab Contents 1<br/>Tab Contents 1<br/>
        </div>
        <div *ngIf="tab == 2">
          Tab Contents 2<br/> Tab Contents 2<br/>Tab Contents 2<br/>Tab Contents 2<br/>Tab Contents 2<br/>
        </div>
        <div *ngIf="tab == 3">
          Tab Contents 3<br/> Tab Contents 3<br/>Tab Contents 3<br/>Tab Contents 3<br/>Tab Contents 3<br/>
        </div>
      </div>
      
      HTML:
      <pre>
      &lt;ul class="tabs">
        &lt;li class="tab" (click)="tab=1" [class.current]="!tab || tab == 1">Tab 1&lt;/li>
        &lt;li class="tab" (click)="tab=2" [class.current]="tab == 2">Tab 2&lt;/li>
        &lt;li class="tab" (click)="tab=3" [class.current]="tab == 3">Tab 3&lt;/li>
      &lt;/ul>
      &lt;div class="tab-contents">
        &lt;div *ngIf="!tab || tab == 1">
          Tab Contents 1&lt;br/> Tab Contents 1&lt;br/>Tab Contents 1&lt;br/>Tab Contents 1&lt;br/>Tab Contents 1&lt;br/>
        &lt;/div>
        &lt;div *ngIf="tab == 2">
          Tab Contents 2&lt;br/> Tab Contents 2&lt;br/>Tab Contents 2&lt;br/>Tab Contents 2&lt;br/>Tab Contents 2&lt;br/>
        &lt;/div>
        &lt;div *ngIf="tab == 3">
          Tab Contents 3&lt;br/> Tab Contents 3&lt;br/>Tab Contents 3&lt;br/>Tab Contents 3&lt;br/>Tab Contents 3&lt;br/>
        &lt;/div>
      &lt;/div>
      </pre>
      CSS:
      <pre>
       .tabs {
        padding: 0;
        list-style: none;
        position: relative;
        top: 1px;
      }
      .tabs .tab {
        display: block;
        float: left;
        border: 1px solid #ccc;
        border-radius: 5px 5px 0 0;
        background-color: #eee;
        padding: 0 10px;
      }
      .tabs .tab.current {
        background-color: #fff;
        border-bottom: 1px solid transparent;
      }
      .tab-contents {
        clear:both;
        border: 1px solid #ccc;
        border-radius: 0 0 5px 5px;
        padding: 10px;
      }
      </pre>
    </div>
  `,
  styles: [`
     .tabs {
      padding: 0;
      list-style: none;
      position: relative;
      top: 1px;
    }
    .tabs .tab {
      display: block;
      float: left;
      border: 1px solid #ccc;
      border-radius: 5px 5px 0 0;
      background-color: #eee;
      padding: 0 10px;
    }
    .tabs .tab.current {
      background-color: #fff;
      border-bottom: 1px solid transparent;
    }
    .tab-contents {
      clear:both;
      border: 1px solid #ccc;
      border-radius: 0 0 5px 5px;
      padding: 10px;
    }
  `]
})
export class PartialTabComponent {
}