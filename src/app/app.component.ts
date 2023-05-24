import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users = [
    { name: 'Denis', age: 23 },
    { name: 'Matt', age: 30 },
    { name: 'Adam', age: 18 },
  ];

  onClickAdd(): void {
    // this will work with an inpur pipe - BAD for perfomance
    // the pipe it will run every single time because of change detection
    // this.users.push({ name: 'Ben', age: 35 });

    // use pure pipes and this
    this.users = [...this.users, { name: 'Ben', age: 35 }];
  }
}
