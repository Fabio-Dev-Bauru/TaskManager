import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TarefaListaComponent } from './tarefas/components/tarefa-lista/tarefa-lista.component';
import { TarefaCadastroComponent } from './tarefas/components/tarefa-cadastro/tarefa-cadastro.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaCadastroComponent,
    TarefaListaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
