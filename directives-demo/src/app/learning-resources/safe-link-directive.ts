import { Directive, Input } from "@angular/core";


@Directive({
   selector: "a[appSafeLink]",
   standalone: true,
   host: {
    "(click)": "onLinkClicked($event)"
   }
})
export class SafeLinkDirective {

    @Input() queryParam = 'myApp';
      
    constructor(){
        console.log("SafeLinkDirective is active")
    }

    onLinkClicked(event: MouseEvent){
        const wantsToLeave = window.confirm("Do you want to leave this app ?")
        if(wantsToLeave){
            const redirectLink = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = redirectLink + '?from=' + this.queryParam;
            return;
        }
        event.preventDefault();
    }

}