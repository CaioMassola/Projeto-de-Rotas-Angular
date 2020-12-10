import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CursosService } from './cursos.service';
import { CursonotFoundComponent } from './cursonot-found/cursonot-found.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';


@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursonotFoundComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule,
    RouterModule
    
  ],
  exports: [],
  providers:[
    CursosService
  ]
})
export class CursosModule { }
