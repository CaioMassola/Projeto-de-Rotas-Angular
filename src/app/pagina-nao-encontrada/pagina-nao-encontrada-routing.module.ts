import { AuthGuard } from './../guards/auth-guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

import { NgModule} from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const pagNotEncontrada: Routes = [
  {path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard]} 
];
   
@NgModule({
  imports: [RouterModule.forChild(pagNotEncontrada)],
  exports: [RouterModule]
})
export class PaginaNaoEncontradaModule { }
