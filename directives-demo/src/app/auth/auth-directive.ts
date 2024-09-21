import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from "@angular/core";
import { Permission } from "./auth.model";
import { AuthService } from "./auth.service";  



@Directive({
    selector: '[appAuth]',
    standalone: true
})
export class AuthDirective {
    userType = input.required<Permission>({alias: 'appAuth'});
    private authService = inject(AuthService);
    // refers to the place in DOM structure where host element of this directive is located
    private viewContainerRef = inject(ViewContainerRef);
    // refers to the template content of ViewContainerRef
    private templateRef = inject(TemplateRef);

    constructor(){
        effect(() => {
            if(this.authService.activePermission() === this.userType()){
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
            else{
                this.viewContainerRef.clear();
            }
        })
    }


}