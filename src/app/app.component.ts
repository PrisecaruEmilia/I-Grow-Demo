import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.currentUserService.setCurrentUser();
    }, 2000);
  }
}
