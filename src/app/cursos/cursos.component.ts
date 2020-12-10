import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy{

  cursos: any;
  pagina:number;
  inscricao: Subscription;

  constructor(
    private cursosServices: CursosService,
    private router: ActivatedRoute,
    private rout: Router
  ) { }

  ngOnInit() {
    this.cursos = this.cursosServices.getCursos();
    this.inscricao = this.router.queryParams.subscribe((queryParams: any)=> {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  proximaPagina(){
    this.pagina++;
    this.rout.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}});
  }

}
