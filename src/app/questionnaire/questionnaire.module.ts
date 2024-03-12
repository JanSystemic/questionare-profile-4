import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Imports
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';


import { MatIconModule } from '@angular/material/icon';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { TextAnswerComponent } from './text-answer/text-answer.component';
import { ContinueButtonComponent } from './continue-button/continue-button.component';
import { QuestionnaireComponent } from './questionnaire.component';
import { SingleOptionComponent } from './single-option/single-option.component';
import { MultiOptionComponent } from './multi-option/multi-option.component';


@NgModule({
  declarations: [
    QuestionnaireComponent,
    TextAnswerComponent,
    ContinueButtonComponent,
    SingleOptionComponent,
    MultiOptionComponent
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    HttpClientModule,
    FormsModule,
    // Angular Material Modules
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule,
    MatStepperModule

  ]
})
export class QuestionnaireModule { }
