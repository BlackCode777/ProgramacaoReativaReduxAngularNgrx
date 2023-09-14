import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/Models/UsuarioModel';
import { UsuarioService } from 'src/app/Repository/usuario.service';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.scss'],
})
export class ListagemUsuariosComponent {
  public usuarios$: Observable<UsuarioModel[]> | any;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(result => {
      console.log(result);

      // Filtrando os dados para exibir apenas os usuarios com perfil de administrador
      // this.usuarios$ = result.filter((usuario: UsuarioModel) => {
      //   return usuario.perfil === 'administrador';
      // });

      this.usuarios$ = result;
    });
  }

  editar(id: any) {}

  excluir(id: any) {}
}
