
import { AuthGuard } from './../guards/auth-guard';
import { AuthService } from './../login/auth.service';
import { CursonotFoundComponent } from './cursonot-found/cursonot-found.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NgModule} from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursosGuard } from '../guards/cursos-guard';



const cursosRoutes: Routes = [
  {path: 'cursos', component: CursosComponent, canActivate:[AuthGuard], canActivateChild:[CursosGuard], canLoad: [AuthGuard]},
  {path: 'curso/:id', component: CursoDetalheComponent, canActivate:[AuthGuard], canActivateChild:[CursosGuard], canLoad: [AuthGuard]},
  {path: 'notFound', component: CursonotFoundComponent, canActivate:[AuthGuard] , canActivateChild:[CursosGuard], canLoad: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
