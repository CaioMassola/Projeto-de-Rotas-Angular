import { Aluno } from './../../guards/aluno';
import { AlunosService } from './../alunos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alunos-detalhes',
  templateUrl: './alunos-detalhes.component.html',
  styleUrls: ['./alunos-detalhes.component.scss']
})
export class AlunosDetalhesComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  aluno: any;
  id: any;
  

  constructor(
    private rourter: Router,
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(){ 
    // this.inscricao = this.route.params.subscribe((params: any)=> {
    //   this.id = params['id'];
    //   this.aluno = this.alunosService.getAluno(this.id);
    // })

    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {
        console.log(info);
        this.aluno = info.aluno
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.rourter.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
