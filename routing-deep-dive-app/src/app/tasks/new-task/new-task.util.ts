import { CanDeactivateFn } from "@angular/router";
import { NewTaskComponent } from "./new-task.component";


export const canDeactivateGuardFun: CanDeactivateFn<NewTaskComponent> = (component) => {
    if(component.isSubmitted){ return true;}
    if(component.enteredDate() || component.enteredSummary() || component.enteredTitle()){
        return window.confirm("Do you really want to leave? You will lose the entered data!");
    }
    return true;
}