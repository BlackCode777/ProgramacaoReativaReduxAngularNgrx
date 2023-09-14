import { Component } from '@angular/core';
import { UsuarioModel } from 'src/app/Models/UsuarioModel';
import { UsuarioService } from 'src/app/Repository/usuario.service';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss'],
})
export class CadastroUsuariosComponent {
  public model: UsuarioModel = {
    nome: '',
    idade: 0,
    perfil: '',
    id: 0,
  };

  constructor(
    //private store: Store<AppState>,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {}

  addUsuario() {
    if(this.model.id == 0){
      console.log("cadastrar usuario", this.model)
      this.usuarioService.addUsuario(this.model).subscribe(
        (data) => {
          this.model = data;
          //this.model = { id: 0, nome: '', idade: 0, perfil: '' }; // Limpa o formulario
          console.log(data);
        }, (error) => {
          console.log(error);
        }
      )
    } else{
      if (this.model.id != 0 && this.model.id != null && this.model.id != undefined && this.model.id > 0) {
        console.log('Atualiza usuario', this.model);
        this.usuarioService.updateUsuario(this.model).subscribe((data) => {
          this.model = data;
          console.log(data);
        });
      }
    }
  }
}
