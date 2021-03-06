import { CursosService } from './../cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: any;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private rourter: Router
  ) {
  //  this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(){
  this.inscricao = this.route.params.subscribe((params: any)=> {this.id = params['id'];
  this.curso = this.cursosService.getCurso(this.id);
  if(this.curso ==null){
    this.rourter.navigate(['/notFound'])

  }
  });

  }
  
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
