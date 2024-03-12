import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question.model';

@Component({
  selector: 'app-single-option',
  templateUrl: './single-option.component.html',
  styleUrls: ['./single-option.component.scss']
})
export class SingleOptionComponent {
  @Input() question: Question;
  @Output() scrollNext = new EventEmitter<any>();
  selectedOption: any;

  gotoNext() {
    const jumps = this.question.jumps;
    let destination;

    if (jumps.length > 0) {
      jumps.forEach(jump => {
        if (jump.conditions[0].value === this.selectedOption) {
          destination = jump.destination.id;
        }
      });
    }
    this.scrollNext.emit({
      question: this.question,
      destination: destination || ''
    });
  }
}
