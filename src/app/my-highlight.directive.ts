import { Directive,ElementRef,HostListener} from '@angular/core';
import { AppComponent } from './app.component';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlighterDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: any) {
    const indexNumber=event.target.innerText;
    switch (indexNumber) {
      case '1':
        this.highlight('Red');
        break;
      case '2':
        this.highlight('Green');
        break;
      case '3':
        this.highlight('Red');
        break;
      default:
        this.highlight(null);
        break;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color=color;
  }
}

