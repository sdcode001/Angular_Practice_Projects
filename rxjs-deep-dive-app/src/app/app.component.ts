import { Component, DestroyRef, inject, OnInit, signal, effect } from '@angular/core';
import { interval, map } from 'rxjs';
import { CustomInterval$ } from './custom.observable';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  clickCount = signal(0);

  destroyRef = inject(DestroyRef);

  constructor(){
    effect(() => {
      console.log(`Button clicked ${this.clickCount()} times`)
    })
  }

  ngOnInit(): void {
     const subscription$ = interval(1000)
     .pipe(
        map((val) => val * 3)
     )
     .subscribe({
       next: (val) => {
          console.log(val);
       },
       error: (err) => {

       }
     })

    this.destroyRef.onDestroy(() => {
      subscription$.unsubscribe();
    })

    CustomInterval$.subscribe({
      next: (data) => {
        console.log(data);
      },

      complete: () => {
        console.log("Complete...")
      }
    })

  }

  onClick() {
    this.clickCount.update((prevVal) => prevVal + 1);
  }

}
