import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CalculatorInput } from './calculator-input.model';

@Component({
  selector: 'app-calculator-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator-input.component.html',
  styleUrl: './calculator-input.component.css'
})
export class CalculatorInputComponent {

  initial_investment=0;
  anual_investment=0;
  expected_return=0;
  duration=0;
  
  @Output() isInputTaken = new EventEmitter<CalculatorInput>();


  handelCalculate() {
      const my_input:CalculatorInput = {
        initial_investment:this.initial_investment,
        anual_investment:this.anual_investment,
        expected_return:this.expected_return,
        duration:this.duration
      }
      this.isInputTaken.emit(my_input);
  }

}

