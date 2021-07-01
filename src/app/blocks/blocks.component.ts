import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  initialDivs=[1,2,3,4,5,6];
  count: any = this.initialDivs.length;

  @HostListener('document:scroll', ['$event']) onScroll($event: Event): void {
    if ($event) {
      this.createDivs($event);
    }
  }
  createDivs($event: Event) {
    this.count++;
    let container = this.el.nativeElement.querySelector('div');
    let div = this.renderer.createElement('div');
    let btn = this.renderer.createElement('button');
    this.renderer.setProperty(btn, 'id', this.count);
    this.renderer.addClass(div, 'dynamic-div');
    this.renderer.addClass(btn, 'btn');
    let text = this.renderer.createText('CLICK ME');
    this.renderer.appendChild(btn, text);
    this.renderer.appendChild(div, btn);
    this.renderer.appendChild(container, div);
    this.renderer.listen(btn, 'click', (event): void => {
      alert(`Button in div ${event.target.id} is clicked`);
    })
  }

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() { }

  ngOnDestroy(){
    this.renderer.destroy();
  }

  showAlert(idx){
    alert(`Button in div ${idx} is clicked`);
  }
}
