import { Component } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { UsuarioServiceService } from 'src/app/repository/usuario-service.service';

@Component({
  selector: 'app-listagem-user',
  templateUrl: './listagem-user.component.html',
  styleUrls: ['./listagem-user.component.scss'],
})
export class ListagemUserComponent {
  public usuarios: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioServiceService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe((usuarios: UsuarioModel[]) => {
      // Type 'UsuarioModel[]' is missing the following properties from type 'Observable<UsuarioModel[]>': source, operator, lift, subscribe, and 2 more.ts(2740)
      this.usuarios = usuarios;
      //this.usuarios$ = data as UsuarioModel[];
      //this.usuarios$ = data;
    });
  }

  editar(usuario: UsuarioModel) {}

  // @functTimeOutEstudoDECORATOR(6000)
  excluir(id: number) {}


}

// Entendendo o funcionamento do decorator @functTimeOutEstudoDECORATOR
function functTimeOutEstudoDECORATOR(milliseconds: number) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Esperando ${milliseconds}...`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milliseconds);
    };

    return descriptor;
  };
}




