import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {
  @Input() channelName = '';

  constructor() {
    console.log('Child constructor is called');
  }

  ngOnInit(): void {
    console.log('Child OnInit is called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child OnChanges is called');
  }

  ngOnDestroy(): void {
    console.log('Child OnDestroy is called');
  }
}
