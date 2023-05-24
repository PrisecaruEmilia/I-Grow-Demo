import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // so if we want to show only the odd numbers, that is an additional condition
  // so we need ng-container, and not another element, but why ??
}
