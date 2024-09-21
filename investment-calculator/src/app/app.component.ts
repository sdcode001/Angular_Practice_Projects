import { Component } from '@angular/core';
import { mapToCanActivate, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CalculatorInputComponent } from "./calculator-input/calculator-input.component";
import { CalculatorInput } from './calculator-input/calculator-input.model';
import { CalculatorOutput } from './calculator-output/calculator-output.model';
import { CalculatorOutputComponent } from './calculator-output/calculator-output.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CalculatorInputComponent, CalculatorOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Investment Calculator';
  result:CalculatorOutput[]=[];

  constructor(private appService: AppService){ }
          
  handelCalculateInput(my_input: CalculatorInput) {
      this.result = this.appService.calculateInvestmnt(my_input);
  }
  
}