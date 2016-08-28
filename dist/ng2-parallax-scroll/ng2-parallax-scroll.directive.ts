import { ViewContainerRef, Directive } from '@angular/core';

@Directive({
  selector: '[ng2-parallax], ng2-parallax'
})
export class Ng2ParallaxScrollDirective {
  
  el: HTMLElement;
  img: HTMLImageElement;
  imgOrgWidth: any;
  imgOrgHeight: any;
  
  constructor(private viewContainer: ViewContainerRef) {
    this.el = this.viewContainer.element.nativeElement;
  }
  
  ngAfterViewInit() {
    this.img = <HTMLImageElement>this.el.querySelector("img");
    this.img.onload = () => {
      this.imgOrgWidth = this.imgOrgWidth || this.img.offsetWidth;
      this.imgOrgHeight = this.imgOrgHeight || this.img.offsetHeight;
      console.log(this.img.offsetWidth, this.img.offsetHeight, this.img.width, this.img.height);

      this.setParallaxImage();
      this.updateParallaxImage();
      window.addEventListener('scroll', () => {
        this.updateParallaxImage();
      });
      window.addEventListener('resize', () => {
        this.setParallaxImage();
        this.updateParallaxImage();
      })
    }
  }
  
  private setParallaxImage() {
    //set img style
    let imgSize = this.imgOrgWidth > this.el.offsetWidth ? 
      { width : this.el.offsetWidth + 'px'} : { height : this.el.offsetHeight * 1.5 + 'px'}
    Object.assign(this.img.style, {
      display: 'block', position: 'absolute', bottom: 0, left: 0
    }, imgSize);
    
    // set container style
    Object.assign(this.el.style, {
      position: 'relative', overflow: 'hidden'
    });
   
    // wrap image with a div, then set style
    var imgWrapperEl: HTMLElement = <HTMLElement>this.el.querySelector('.parallax-img-wrapper');
    if (!imgWrapperEl) {
      imgWrapperEl = document.createElement('div');
      imgWrapperEl.className = 'parallax-img-wrapper';
      imgWrapperEl.appendChild(this.img);
      this.el.appendChild(imgWrapperEl);
    }
    Object.assign(imgWrapperEl.style, {
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1
    });
  }
  
  private updateParallaxImage(): void {
    var elRect = this.el.getBoundingClientRect();
    var imgRect = this.img.getBoundingClientRect();
    
    var imgDist = imgRect.height - elRect.height;
    var bottom = this.el.offsetTop + elRect.height;
    var top = this.el.offsetTop;
    var scrollTop = document.body.scrollTop;
    var windowBottom = scrollTop + window.innerHeight;
    var percentScrolled =
      (windowBottom - top) / (elRect.height + window.innerHeight);
      //console.log(imgDist, percentScrolled, imgDist * percentScrolled);
  
    var parallax = Math.round((imgDist * percentScrolled));
    if (
      (bottom > scrollTop) && (top < (scrollTop + window.innerHeight))
    ) {
      this.img.style.bottom = parallax * -1 + 'px';
      //img.style.transform = "translate3D(0%," + parallax + "px, 0)";
    }
  }    
}

