import { AbstractControl } from "@angular/forms";

export const mustContainQuestionMark = (control: AbstractControl) => {
    //Rule- for valid condition validator function returns null
    if(control.value.includes('?')){
        return null;
    }
    
    return {isContainQuestionMark: false};
}