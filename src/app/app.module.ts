import { PaginaNaoEncontradaModule } from './pagina-nao-encontrada/pagina-nao-encontrada-routing.module';
import { AlunosGuard } from './guards/alunos-guard';
import { CursosGuard } from './guards/cursos-guard';
import { AuthGuard } from './guards/auth-guard';
import { AuthService } from './login/auth.service';
import { AlunosModule } from './alunos/alunos.module';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { AlunosComponent } from './alunos/alunos.component';
import {AlunoDetalheResolver} from './guards/aluno-detalhe.resolver';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // routing
    AppRoutingModule,
    CursosModule,
    AlunosModule,
    AlunosModule,
    PaginaNaoEncontradaModule
  
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard,
    AlunoDetalheResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
