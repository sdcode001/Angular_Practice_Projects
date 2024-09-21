import { Injectable } from "@angular/core";
import { CalculatorInput } from "./calculator-input/calculator-input.model";
import { CalculatorOutput } from "./calculator-output/calculator-output.model";


@Injectable({providedIn:'root'})
export class AppService{

    public calculateInvestmnt(input: CalculatorInput){
        const cal_result = [];
        let investmentValue = input.initial_investment;
        for(let i=0;i<input.duration;i++){
         const year = i+1;
         const interestErnedInYear = investmentValue*(input.expected_return/100);
         investmentValue += interestErnedInYear + input.anual_investment;
         const totalInterest = investmentValue - input.anual_investment*year - input.initial_investment;
         const outputData: CalculatorOutput = {
           year: year,
           interest: interestErnedInYear,
           valueEndOfYear: investmentValue,
           anualInvestment: input.anual_investment,
           totalInterest: totalInterest,
           totalAmountInvested: input.initial_investment + input.anual_investment*year
         }
         cal_result.push(outputData)
        }
        return cal_result;
     }
     
}