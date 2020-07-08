import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();   //  an event to emmit [this event emitter holds number as a value]
  //because of @output this interval can be listened from outside of the component
  interval;   // a simple variable to hold the interval value
  lastNumber = 0; // holds the last number by default it is 0


  constructor() { }

  ngOnInit() {
  }

  onStartCounting(){        // this method will be call when start counting button clicked
    this.interval = setInterval(
      ()=>{
            this.intervalFired.emit(this.lastNumber+1);   // emit the last number + 1
            this.lastNumber++;
        },
        1000);
  }

  onPauseCounting(){        // this method will be call when pause counting button clicked
    clearInterval(this.interval);
  }

}
