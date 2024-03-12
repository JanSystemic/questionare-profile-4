import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'typeform';

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const elements = this.elem.nativeElement.querySelectorAll('input');
    elements.forEach(elem => {
      this.renderer.listen(elem, 'change', (event) => {
        event.stopPropagation();
        const nextElement = elem.parentElement.parentElement.nextElementSibling;
        if (nextElement) {
          nextElement.click();
        }
      });
    });
  }
}
