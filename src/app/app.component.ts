import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // accessing an HTML element before calling a method

  @ViewChild('dobInput') dateOfBirth?: ElementRef;
  @ViewChild('ageInput') age?: ElementRef;

  calculateAge() {
    let birthYear = new Date(
      this.dateOfBirth?.nativeElement.value
    ).getFullYear();

    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    this.age!.nativeElement.value = age;
  }
}
