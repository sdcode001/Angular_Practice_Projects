import { Component, Input } from '@angular/core';
import { CalculatorOutput } from './calculator-output.model';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-calculator-output',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './calculator-output.component.html',
  styleUrl: './calculator-output.component.css'
})
export class CalculatorOutputComponent {
   @Input({required:true}) result: CalculatorOutput[] = [];
}
