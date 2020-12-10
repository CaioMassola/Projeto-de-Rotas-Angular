import { AlunosGuard } from './../guards/alunos-guard';

import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';
import {AlunoDetalheResolver} from '../guards/aluno-detalhe.resolver'


import { NgModule} from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { AlunosDesativarGuard } from '../guards/alunos-desativar-guard';


const alunosRoutes: Routes = [
  {path: 'alunos', component: AlunosComponent, children : [
    {path: 'novo', component: AlunosFormComponent},
    {path: ':id', component: AlunosDetalhesComponent, resolve: {aluno : AlunoDetalheResolver}},
    {path: ':id/editar', component: AlunosFormComponent, canDeactivate:[AlunosDesativarGuard]}
  ], canActivate:[AuthGuard], canActivateChild:[AlunosGuard], canLoad: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
