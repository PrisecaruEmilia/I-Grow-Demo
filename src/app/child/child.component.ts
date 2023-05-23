import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
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
export class ChildComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked
{
  @Input() channelName = '';

  @ContentChild('projectedContent') projectedContent: any;

  constructor() {
    console.log('Child constructor is called');
  }

  ngOnInit(): void {
    console.log('Child OnInit is called');
    console.log('Child OnInit - ' + this.projectedContent);
  }

  // we can not acces this variable until the content is initialized

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child OnChanges is called');
    console.log('Child OnChanges - ' + this.projectedContent);
  }

  ngDoCheck() {
    console.log('Child DoCheck is called');
    console.log('Child DoCheck - ' + this.projectedContent);
  }

  ngAfterContentInit(): void {
    console.log('Child AfterContentInit is called');
    console.log('Child AfterContentInit - ' + this.projectedContent);
  }

  ngAfterContentChecked(): void {
    console.log('Child AfterContentChecked is called');
  }

  ngOnDestroy(): void {
    console.log('Child OnDestroy is called');
  }
}
