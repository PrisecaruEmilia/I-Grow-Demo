import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnDestroy {
  counter = 0;
  interval: any;

  constructor() {
    console.log('Child constructor is called');
  }

  ngOnInit(): void {
    console.log('Child OnInit is called');
    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('Child OnDestroy is called');
    clearInterval(this.interval);
  }
}
