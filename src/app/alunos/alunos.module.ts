import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import {AlunosRoutingModule} from './alunos-routing.module'



@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunosDetalhesComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule,
  ],
  providers: [
    AlunosService
  ]
})
export class AlunosModule { }
