import { IFormCanDeactivate } from './IFormCanDeactivate';
import { AlunosFormComponent } from './../alunos/alunos-form/alunos-form.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../login/auth.service';
import { Injectable, Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
  })
export class AlunosDesativarGuard implements CanDeactivate<IFormCanDeactivate> {

    constructor(
        private authService: AuthService,
        private router:Router
      ) { }

      canDeactivate(
        component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        console.log('guarda de desativação');

        //return component.podeMudarRota ? component.podeMudarRota() : true;

        return component.podeDesativar ? component.podeDesativar() : true;
}
}

