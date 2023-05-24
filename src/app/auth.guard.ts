import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private currentUserService: CurrentUserService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    // async

    return this.currentUserService.currentUser$.pipe(
      filter((currentUser) => currentUser !== undefined),
      map((currentUser) => {
        if (!currentUser) {
          this.router.navigateByUrl('/');
          return false;
        }
        return true;
      })
    );
  }

  // sync

  // canActivate(): boolean {
  //   if (localStorage.getItem('token')) {
  //     return true;
  //   }
  //   return false;
  // }
}
