import { Aluno } from './../guards/aluno';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
  {id: 1, nome: 'Gabi', email: 'gabi@gabi'},
  {id: 2, nome: 'Caio', email: 'caio@caio'},
  {id: 3, nome: 'Alani', email: 'alani@alani'}]

  constructor() { }

  getAlunos(){
  return this.alunos;
  }

  getAluno(id: number){
    let student = this.getAlunos();
    for(let i = 0; i < student.length; i++){
      let aluno = student[i];
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }
}
