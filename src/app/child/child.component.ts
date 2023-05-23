import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
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
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() channelName = '';

  @ContentChild('projectedContent', { static: true }) projectedContent: any;
  @ViewChild('childContent', { static: true }) childContent: any;

  constructor() {
    console.log('Child constructor is called');
  }

  ngOnInit(): void {
    console.log('Child OnInit is called');
    console.log('Child OnInit - ' + this.projectedContent);
    console.log('Child OnInit - ' + this.childContent);
  }

  // we can not acces this variable until the content is initialized

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child OnChanges is called');
    console.log('Child OnChanges - ' + this.projectedContent);
    console.log('Child OnChanges - ' + this.childContent);
  }

  ngDoCheck() {
    console.log('Child DoCheck is called');
    console.log('Child DoCheck - ' + this.projectedContent);
    console.log('Child DoCheck - ' + this.childContent);
  }

  ngAfterContentInit(): void {
    console.log('Child AfterContentInit is called');
    console.log('Child AfterContentInit - ' + this.projectedContent);
    console.log('Child AfterContentInit - ' + this.childContent);
  }

  ngAfterContentChecked(): void {
    console.log('Child AfterContentChecked is called');
    console.log('Child AfterContentChecked - ' + this.childContent);
  }

  ngAfterViewInit(): void {
    console.log('Child AfterViewInit is called');
    console.log('Child AfterViewInit - ' + this.childContent);
  }

  ngAfterViewChecked(): void {
    console.log('Child AfterViewChecked is called');
    console.log('Child AfterViewChecked - ' + this.childContent);
  }

  ngOnDestroy(): void {
    console.log('Child OnDestroy is called');
  }
}
