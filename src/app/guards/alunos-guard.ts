import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class AlunosGuard implements CanActivateChild {

    constructor(
        private authService: AuthService,
        private router:Router
      ) { }

    canActivateChild( 
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        
        ):Observable<boolean> | boolean {
        

            if(state.url.includes('editar')){
                // alert('Usuario sem acesso')
                // return false;
            }
        return true;
        }

}