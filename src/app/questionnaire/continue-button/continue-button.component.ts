import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-continue-button',
  templateUrl: './continue-button.component.html',
  styleUrls: ['./continue-button.component.scss']
})
export class ContinueButtonComponent {
  @Output() next = new EventEmitter<any>();

  gotoNext() {
    this.next.emit();
  }
}