import { Component } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { UsuarioServiceService } from 'src/app/repository/usuario-service.service';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.scss'],
})
export class CadastroUserComponent {

  public model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private userService: UsuarioServiceService) {}

  ngOnInit(): void {}

  //Salvar usuario no banco de dados e redirecionar para a ListagemUserComponent (Listagem de usuarios)
  // e limpar o formulario de cadastro de usuario (this.model = {})
  addUsuario() {
    if( this.model.id == 0 ){
      // Se o id do usuário for igual a zero então salva no banco de dados
      this.userService.addUsuario(this.model).subscribe(
        (data) => {
          this.model = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

    }else{
      // Se o usuário já existir no banco de dados então atualiza o usuário
      this.userService.updateUsuario(this.model).subscribe(
        (data) => {
          this.model = data;
          console.log(data);
        }
      );
    }
    console.log(this.model);
    //this.model = {};
  }

  
}
