import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: boolean = false;
  mostrarMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
  
    if(usuario.nome === 'caio1010' && usuario.senha === '123'){
      this.auth = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['/']);
      
    } else {
      this.auth = false;
      alert('Login não encontrado');
      this.mostrarMenu.emit(false);
    }
  }

  usuarioAutenticado(){
    return this.auth;
  }
}
