import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true
})
export class TempraturePipe implements PipeTransform{

    transform(value: string | number | null, inputType: 'cel'|'fah', outputType?: 'cel'|'fah') {
        if(value==null){ return '';}
        let val;
        if(typeof value === 'string'){val = parseFloat(value);}
        else{val = value;}
        
        let outputVal = val;

        if(inputType=='cel' && outputType=='fah'){
            outputVal = val * (9/5) + 32;
        }
        else if(inputType=='fah' && outputType=='cel'){
           outputVal = (val-32) * (5/9);
        }

        let symbol: '℃'|'℉'

        if(outputType){
           symbol = outputType=='cel' ? '℃' : '℉';
        }
        else{
           symbol = inputType=='cel' ? '℃' : '℉';
        }
        
        return `${outputVal.toFixed(2)} ${symbol}`;
    }

}