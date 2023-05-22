import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(ChildComponent, { static: true }) child?: ChildComponent;
  increment() {
    console.log(this.child);
    this.child?.increment();
  }
}
