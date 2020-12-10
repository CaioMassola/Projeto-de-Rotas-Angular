import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 public usuario: Usuario = new Usuario();

  constructor(
    private loginService: AuthService
  ) { }

  ngOnInit() {
  }

  fazerLogin(){
  console.log(this.usuario);
  this.loginService.fazerLogin(this.usuario);
  }

}
