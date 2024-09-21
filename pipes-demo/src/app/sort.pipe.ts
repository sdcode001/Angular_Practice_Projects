import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'sort',
    standalone: true,
    pure: false
})
export class SortingPipe implements PipeTransform {

    transform(value: string[] | number[], direction:'asc'|'desc'='asc') {
       let output = [...value];
       output.sort((a,b) => {
          if(direction=='asc'){
            return a > b ? 1 : -1;
          }
          else{
            return a > b ? -1 : 1;
          }
       });

       return output;
    }  

}