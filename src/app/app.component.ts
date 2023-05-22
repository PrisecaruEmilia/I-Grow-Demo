import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ChildComponent, { static: true }) child?: ChildComponent;
  @ViewChild('button', { static: true })
  buttonRef?: ElementRef<HTMLButtonElement>;

  increment() {
    console.log(this.child);
    this.child?.increment();
  }

  ngAfterViewInit(): void {
    if (this.buttonRef?.nativeElement) {
      this.buttonRef.nativeElement.innerHTML = 'after init';
    }
  }
}
