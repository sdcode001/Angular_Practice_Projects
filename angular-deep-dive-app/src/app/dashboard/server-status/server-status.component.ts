import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  private interval!: ReturnType<typeof setInterval>;

  constructor(){ }

  ngOnInit(){
      this.interval = setInterval(() => {
              const rand = Math.random();

              if(rand<0.5){
                this.currentStatus='online'
              }
              else if(rand>=0.5 && rand<0.9){
                this.currentStatus='offline'
              }
              else{
                this.currentStatus='unknown'
              }
            
           }, 4000);
  }

  
  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }


}
