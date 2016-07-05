import { Component, enableProdMode } from '@angular/core';
import { NG2_DIRECTIVES, OverlayManager } from "ng2-ui";

@Component({
  selector: 'partial-overlay',
  providers: [OverlayManager],
  directives: [NG2_DIRECTIVES],
  template: `
    <h2 class="group-title ng2-overlay">
      <a name="ng2-overlay" href="https://github.com/jsvalley/ng2-overlay">ng2-overlay</a>
    </h2>
    <div class="directive-group">
      <h3>Open Inside Overlay For Window - Modal</h3>
      <div id="window-loading" ng2-overlay-of="window">
        <div style="color:#fff">Loading</div>
        <button (click)="overlayManager.close('window-loading')">Close</button>
      </div>
      <button (click)="overlayManager.open('window-loading')">Show Loading For Window</button>
      <pre>
  &lt;div id="window-loading" ng2-overlay-of="window">
    &lt;div style="color:#fff">Loading&lt;/div>
    &lt;button (click)="overlayManager.close('window-loading')">Close&lt;/button>
  &lt;/div>
  &lt;button (click)="overlayManager.open('window-loading')">Show Loading For Window&lt;/button>
      </pre>
      

      <h3>Open Inside Overlay For A DIV</h3>
      <div id="my-div" style="width: 400px; height: 100px; border: 1px solid #ccc;">
        <button (click)="overlayManager.open('div-loading')">Show Loading For This Div</button>
        <div id="div-loading" ng2-overlay>
          <div style="color:#fff">Loading</div>
          <button (click)="overlayManager.close('div-loading')">Close</button>
        </div>
        My Div<br/>
      </div>
      <pre>
  &lt;div id="my-div" style="width: 400px; height: 100px; border: 1px solid #ccc;">
    &lt;button (click)="overlayManager.open('div-loading')">Show Loading For This Div&lt;/button>
    &lt;div id="div-loading" ng2-overlay>
      &lt;div style="color:#fff">Loading&lt;/div>
      &lt;button (click)="overlayManager.close('div-loading')">Close&lt;/button>
    &lt;/div>
    My Div&lt;br/>
  &lt;/div>
      </pre>

      <h3>Open Outside Overlay For A DIV</h3>

      <div id="top-outside" class="overlay-container">
        <div id="tl-overlay" class="arrow-box"
             ng2-overlay-position="top left outside">Top Left </div>
        <div id="tc-overlay" class="arrow-box"
             ng2-overlay-position="top center outside">Top Center </div>
        <div id="tr-overlay" class="arrow-box"
             ng2-overlay-position="top right outside">Top Right </div>
        <button (mouseover)="overlayManager.open('tl-overlay')"
          (mouseout)="overlayManager.close('tl-overlay')">Top-Left </button>
        <button (mouseover)="overlayManager.open('tc-overlay')"
          (mouseout)="overlayManager.close('tc-overlay')">Top-Center </button>
        <button (mouseover)="overlayManager.open('tr-overlay')"
          (mouseout)="overlayManager.close('tr-overlay')">Top-Right </button>
      </div>
      <pre>
&lt;div id="top-outside" class="overlay-container">
  &lt;div id="tl-overlay" class="arrow-box"
       ng2-overlay-position="top left outside">Top Left &lt;/div>
  &lt;div id="tc-overlay" class="arrow-box"
       ng2-overlay-position="top center outside">Top Center &lt;/div>
  &lt;div id="tr-overlay" class="arrow-box"
       ng2-overlay-position="top right outside">Top Right &lt;/div>
  &lt;button (mouseover)="overlayManager.open('tl-overlay')"
    (mouseout)="overlayManager.close('tl-overlay')">Top-Left &lt;/button>
  &lt;button (mouseover)="overlayManager.open('tc-overlay')"
    (mouseout)="overlayManager.close('tc-overlay')">Top-Center &lt;/button>
  &lt;button (mouseover)="overlayManager.open('tr-overlay')"
    (mouseout)="overlayManager.close('tr-overlay')">Top-Right &lt;/button>
&lt;/div>
      </pre>

      <div id="bottom-outside" class="overlay-container">
        <div id="bl-overlay" class="arrow-box"
           ng2-overlay-position="bottom left outside">Bottom Left </div>
        <div id="bc-overlay" class="arrow-box"
           ng2-overlay-position="bottom center outside">Bottom Center </div>
        <div id="br-overlay" class="arrow-box"
           ng2-overlay-position="bottom right outside">Bottom Right </div>
        <button (mouseover)="overlayManager.open('bl-overlay')"
          (mouseout)="overlayManager.close('bl-overlay')">Bottom-Left </button>
        <button (mouseover)="overlayManager.open('bc-overlay')" 
          (mouseout)="overlayManager.close('bc-overlay')">Bottom-Center </button>
        <button (mouseover)="overlayManager.open('br-overlay')"
          (mouseout)="overlayManager.close('br-overlay')">Bottom-Right </button>
      </div>
      <pre>
&lt;div id="bottom-outside" class="overlay-container">
  &lt;div id="bl-overlay" class="arrow-box"
     ng2-overlay-position="bottom left outside">Bottom Left &lt;/div>
  &lt;div id="bc-overlay" class="arrow-box"
     ng2-overlay-position="bottom center outside">Bottom Center &lt;/div>
  &lt;div id="br-overlay" class="arrow-box"
     ng2-overlay-position="bottom right outside">Bottom Right &lt;/div>
  &lt;button (mouseover)="overlayManager.open('bl-overlay')"
    (mouseout)="overlayManager.close('bl-overlay')">Bottom-Left &lt;/button>
  &lt;button (mouseover)="overlayManager.open('bc-overlay')" 
    (mouseout)="overlayManager.close('bc-overlay')">Bottom-Center &lt;/button>
  &lt;button (mouseover)="overlayManager.open('br-overlay')"
    (mouseout)="overlayManager.close('br-overlay')">Bottom-Right &lt;/button>
&lt;/div>
      </pre>

      <div id="left-outside" class="overlay-container" style="margin-left: 100px">
        <div id="lt-overlay" class="arrow-box"
          ng2-overlay-position="left top outside">Left Top</div>
        <div id="lb-overlay"  class="arrow-box"
          ng2-overlay-position="left bottom outside">Left Bottom</div>
        <button (mouseover)="overlayManager.open('lt-overlay')"
          (mouseout)="overlayManager.close('lt-overlay')">Left-Top </button>
        <button (mouseover)="overlayManager.open('lb-overlay')"
          (mouseout)="overlayManager.close('lb-overlay')">Left-Bottom </button>
      </div>
      <pre>
&lt;div id="left-outside" class="overlay-container" style="margin-left: 100px">
  &lt;div id="lt-overlay" class="arrow-box"
    ng2-overlay-position="left top outside">Left Top&lt;/div>
  &lt;div id="lb-overlay"  class="arrow-box"
    ng2-overlay-position="left bottom outside">Left Bottom&lt;/div>
  &lt;button (mouseover)="overlayManager.open('lt-overlay')"
    (mouseout)="overlayManager.close('lt-overlay')">Left-Top &lt;/button>
  &lt;button (mouseover)="overlayManager.open('lb-overlay')"
    (mouseout)="overlayManager.close('lb-overlay')">Left-Bottom &lt;/button>
&lt;/div>
      </pre>

      <div style="position:relative">
        <div id="right-outside" class="overlay-container">
          <div id="rt-overlay" class="arrow-box"
               ng2-overlay-position="right top outside">Right Top</div>
          <div id="rb-overlay" class="arrow-box"
               ng2-overlay-position="right bottom outside">Right Bottom</div>
          <button (mouseover)="overlayManager.open('rt-overlay')"
            (mouseout)="overlayManager.close('rt-overlay')">Right-Top </button>
          <button (mouseover)="overlayManager.open('rb-overlay')"
            (mouseout)="overlayManager.close('rb-overlay')">Right-Bottom </button>
        </div>
      </div>
      <pre>
&lt;div id="right-outside" class="overlay-container">
  &lt;div id="rt-overlay" class="arrow-box"
       ng2-overlay-position="right top outside">Right Top&lt;/div>
  &lt;div id="rb-overlay" class="arrow-box"
       ng2-overlay-position="right bottom outside">Right Bottom&lt;/div>
  &lt;button (mouseover)="overlayManager.open('rt-overlay')"
    (mouseout)="overlayManager.close('rt-overlay')">Right-Top &lt;/button>
  &lt;button (mouseover)="overlayManager.open('rb-overlay')"
    (mouseout)="overlayManager.close('rb-overlay')">Right-Bottom &lt;/button>
&lt;/div>
      </pre>

    </div>
  `,
  styles: [`
    .overlay-container {
       margin:20px 0; width: 400px; height: 60px; border: 1px solid #ccc; text-align: center;
    }
    .arrow-box {
      position: relative;
      background: #155799;
      color: #fff;
      border: 1px solid #c2e1f5;
    }
    .arrow-box:after, .arrow-box:before {
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    .arrow-box:after {
      border-color: rgba(255, 255, 255, 0);
      border-width: 10px;
    }
    .arrow-box:before {
      border-color: rgba(194, 225, 245, 0);
      border-width: 11px;
    }

    /**
     * arrow on the top side
     */
    .arrow-box.top:after, .arrow-box.top:before {
      bottom: 100%;
      left: 50%;
    }
    .arrow-box.top:after {
      border-bottom-color: #fff;
      margin-left: -10px;
    }
    .arrow-box.top:before {
      border-bottom-color: #c2e1f5;
      margin-left: -11px;
    }

    /**
     * arrow on the bottom side
     */
    .arrow-box.bottom:after, .arrow-box.bottom:before {
      top: 100%;
      left: 50%;
    }
    .arrow-box.bottom:after {
      border-top-color: #fff;
      margin-left: -10px;
    }
    .arrow-box.bottom:before {
      border-top-color: #c2e1f5;
      margin-left: -11px;
    }

    /**
     * arrow on the left side
     */
    .arrow-box.left {
      margin-left: 10px;
    }
    .arrow-box.left:after, .arrow-box.left:before {
      right: 100%;
      top: 50%;
    }
    .arrow-box.left:after {
      border-right-color: #fff;
      margin-top: -10px;
    }
    .arrow-box.left:before {
      border-right-color: #c2e1f5;
      margin-top: -11px;
    }

    /**
     * arrow on the right side
     */
    .arrow-box.right:after, .arrow-box.right:before {
      left: 100%;
      top: 50%;
    }
    .arrow-box.right:after {
      border-left-color: #fff;
      margin-top: -10px;
    }
    .arrow-box.right:before {
      border-left-color: #c2e1f5;
      margin-top: -11px;
    }

  `]
})
export class PartialOverlayComponent {
  constructor(public overlayManager: OverlayManager) {}
}