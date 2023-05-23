import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor() {
    console.log('Child constructor is called');
  }
  ngOnInit(): void {
    console.log('Child OnInit is called');
  }
}
