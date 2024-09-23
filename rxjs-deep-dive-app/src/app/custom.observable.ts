import { Observable } from "rxjs";


// constructor of Observable takes parameter as function, which executes when someone subscribe to this Observable.
// we can also define next, add, remove, error, complete, unsubscribe these call backs according to out need.
export const CustomInterval$ = new Observable((subscriber) => {
    let executionTime = 0;

    const interval =setInterval(() => {
      if(executionTime > 3){
         clearInterval(interval);
         subscriber.complete();
      }

      console.log('Emitting new value...')
      subscriber.next({message: 'New Value'})
      executionTime++;
    }, 2000);

})