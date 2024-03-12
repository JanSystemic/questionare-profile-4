import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question.model';

@Component({
  selector: 'app-text-answer',
  templateUrl: './text-answer.component.html',
  styleUrls: ['./text-answer.component.scss']
})
export class TextAnswerComponent {
  @Input() question: Question;
  @Output() scrollNext = new EventEmitter<any>();

  onPressEnter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.gotoNext();
    }
  }

  gotoNext() {
    this.scrollNext.emit({
      question: this.question,
      destination: ''
    });
  }
}