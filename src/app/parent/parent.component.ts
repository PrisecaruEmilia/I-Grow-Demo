import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  isChild: boolean = false;

  constructor() {
    console.log('Parent constructor is called');
  }

  ngOnInit(): void {
    console.log('Parent OnInit is called');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
}
