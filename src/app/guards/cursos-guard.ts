import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CursosGuard implements CanActivateChild {

    constructor(
        private authService: AuthService,
        private router:Router
      ) { }

    canActivateChild( 
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        
        ):Observable<boolean> | boolean {
        console.log(route)
        console.log(state)
        return true;
        }

}