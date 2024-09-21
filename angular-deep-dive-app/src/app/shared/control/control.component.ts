import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class:"control",
    "(click)": "onHostClick()"
  }
})
export class ControlComponent {
  @Input({required: true}) label = ""

  constructor(private el:ElementRef){ }

  onHostClick(){
    console.log("app-control clicked!")
    console.log(this.el)
  }

}
