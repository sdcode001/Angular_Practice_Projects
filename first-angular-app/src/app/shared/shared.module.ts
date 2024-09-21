import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";


@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent], //whitelisting the componenet to be shared in other places
})
export class SharedModule{ }