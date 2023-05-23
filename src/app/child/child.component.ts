import {
  Component,
  DoCheck,
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
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input() channelName = '';

  constructor() {
    console.log('Child constructor is called');
  }

  ngOnInit(): void {
    console.log('Child OnInit is called');
  }

  // should avoid ngOnChanges and ngDoCheck on the same component

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child OnChanges is called');
  }

  ngDoCheck() {
    console.log('Child DoCheck is called');
  }

  ngOnDestroy(): void {
    console.log('Child OnDestroy is called');
  }
}
