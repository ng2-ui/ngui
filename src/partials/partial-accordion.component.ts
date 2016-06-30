import { Component, enableProdMode } from '@angular/core';

@Component({
  selector: 'partial-accordion',
  template: `
    <h2 class="group-title"><a name="accordion">Accordion</a></h2>

    <div class="directive-group">
      <ul class="accordion">
        <li>
          <div class="header" (click)="accordion=1" 
            [class.current]="!accordion || accordion == 1">Header 1</div>
          <div class="contents" 
            [class.current]="!accordion || accordion == 1">
            Contents 1<br/>Contents 1<br/>Contents 1<br/>Contents 1<br/>Contents 1<br/>
          </div>
        </li>
        <li>
          <div class="header" (click)="accordion=2" 
            [class.current]="accordion == 2">Header 2</div>
          <div class="contents" 
            [class.current]="accordion == 2">
            Contents 2<br/>Contents 2<br/>Contents 2<br/>Contents 2<br/>Contents 2<br/>
          </div>
        </li>
        <li>
          <div class="header" (click)="accordion=3" 
            [class.current]="accordion == 3">Header 3</div>
          <div class="contents" 
            [class.current]="accordion == 3">
            Contents 3<br/>Contents 3<br/>Contents 3<br/>Contents 3<br/>Contents 3<br/>
          </div>
        </li>
      </ul>
      
      HTML:
      <pre>
      &lt;ul class="accordion">
        &lt;li>
          &lt;div class="header" (click)="accordion=1" 
            [class.current]="!accordion || accordion == 1">Header 1&lt;/div>
          &lt;div class="contents" 
            [class.current]="!accordion || accordion == 1">
            Contents 1&lt;br/>Contents 1&lt;br/>Contents 1&lt;br/>Contents 1&lt;br/>Contents 1&lt;br/>
          &lt;/div>
        &lt;/li>
        &lt;li>
          &lt;div class="header" (click)="accordion=1" 
            [class.current]="accordion == 2">Header 1&lt;/div>
          &lt;div class="contents" 
            [class.current]="accordion == 2">
            Contents 2&lt;br/>Contents 2&lt;br/>Contents 2&lt;br/>Contents 2&lt;br/>Contents 2&lt;br/>
          &lt;/div>
        &lt;/li>
        &lt;li>
          &lt;div class="header" (click)="accordion=1" 
            [class.current]="accordion == 3">Header 1&lt;/div>
          &lt;div class="contents" 
            [class.current]="accordion == 3">
            Contents 3&lt;br/>Contents 3&lt;br/>Contents 3&lt;br/>Contents 3&lt;br/>Contents 3&lt;br/>
          &lt;/div>
        &lt;/li>
      &lt;/ul>
      </pre>
      CSS:
      <pre>
      .accordion {
        list-style: none;
        position: relative;
      }
      .accordion .header {
        background-color: #dcdcdc;
        border: 1px solid #ccc;
      }
      .accordion .header.current {
        background-color: #00b3ee;
        color: #fff;
      }
      .accordion .contents {
        display: none;
      }
      .accordion .contents.current {
        display: inherit;
      }
      </pre>
    </div>
  `,
  styles: [`
    .accordion {
      list-style: none;
      position: relative;
    }
    .accordion .header {
      background-color: #dcdcdc;
      border: 1px solid #ccc;
    }
    .accordion .header.current {
      background-color: #00b3ee;
      color: #fff;
    }
    .accordion .contents {
      display: none;
    }
    .accordion .contents.current {
      display: inherit;
    }
  `]
})
export class PartialAccordionComponent {
}