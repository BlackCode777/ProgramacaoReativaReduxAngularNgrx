import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import * as fromUsuariosAction from 'src/app/Store/usuarios/usuarios.actions';
import { UsuarioModel } from 'src/app/models/usuario-model';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.scss'],
})
export class CadastroUserComponent {
  public model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addUsuario() {
    
    if(this.model.id == 0){
      console.log("Cadastro %%% ",this.model);
      this.store.dispatch(
      fromUsuariosAction.CreateUsuario({ payload: this.model })
    );
    }else{
      console.log('Atualiza %%% ', this.model);
      this.store.dispatch(
        fromUsuariosAction.UpdateUsuario({ payload: this.model })
      );
    }

  }
  //Salvar usuario no banco de dados e redirecionar para a ListagemUserComponent (Listagem de usuarios)
  // e limpar o formulario de cadastro de usuario (this.model = {})
  // addUsuario() {
  //   if (this.model.id == 0) {
  //     // Se o id do usuário for igual a zero então salva no banco de dados
  //     this.userService.addUsuario(this.model).subscribe(
  //       (data) => {
  //         this.model = data;
  //          limpando o formulario de cadastro de usuario
  //         this.model = { id: 0, nome: '', idade: 0, perfil: '' };
  //         console.log(data);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   } else {
  //     // Se o usuário já existir no banco de dados então atualiza o usuário
  //     this.userService.updateUsuario(this.model).subscribe((data) => {
  //       this.model = data;
  //       console.log(data);
  //     });
  //   }
  //   console.log(this.model);
  //   //this.model = {};
  // }



}
