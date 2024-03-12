import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question.model';

@Component({
  selector: 'app-multi-option',
  templateUrl: './multi-option.component.html',
  styleUrls: ['./multi-option.component.scss']
})
export class MultiOptionComponent {
  @Input() question: Question;
  @Output() onConfirm = new EventEmitter<any>();
  @Output() scrollNext = new EventEmitter<any>();
  userInput: string = '';
  selectedOptions: string[] = [];

  addCustomOption(option: string) {
    if (option && !this.selectedOptions.includes(option)) {
      this.selectedOptions.push(option);
      this.userInput = '';
    }
  }

  selectOption(choice: string) {
    if (!this.selectedOptions.includes(choice)) {
      this.selectedOptions.push(choice);
    }
  }

  deselectOption(option: string) {
    this.selectedOptions = this.selectedOptions.filter(opt => opt !== option);
  }

  confirmAndProceed() {
    // Emit both selected options and custom input
    this.onConfirm.emit({ selectedOptions: this.selectedOptions, customInput: this.userInput });

    // Emit event to scroll to the next question
    this.gotoNext();
  }

  gotoNext() {
    // Emit event with current question and destination (if any)
    this.scrollNext.emit({
      question: this.question,
      destination: this.getNextQuestionDestination()
    });
  }

  getNextQuestionDestination() {
    // Implement your logic to determine the next question's destination
    // For example, based on selected options or other conditions
    return ''; // Return the destination identifier
  }
}


