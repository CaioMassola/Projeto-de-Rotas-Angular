import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosGuard } from './guards/alunos-guard';
import { CursosGuard } from './guards/cursos-guard';

import { NgModule} from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate:[AuthGuard]},
  // {path: 'cursos', component: CursosComponent},
  // {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'notFound', component: CursonotFoundComponent}

  {path: '**', component: PaginaNaoEncontradaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
