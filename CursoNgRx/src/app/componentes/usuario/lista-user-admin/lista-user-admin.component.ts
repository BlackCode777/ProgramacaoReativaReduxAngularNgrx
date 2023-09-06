import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { AppState } from 'src/app/Store/app.state';
import * as fromUsuariosAction from 'src/app/Store/usuarios/usuarios.actions';
import * as fromUsuariosSelector from 'src/app/Store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-lista-user-admin',
  templateUrl: './lista-user-admin.component.html',
  styleUrls: ['./lista-user-admin.component.scss'],
})
export class ListaUserAdminComponent {
  // Implementando o store - jeito 1
  public listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(
    fromUsuariosSelector.getUsuariosAdmin
  );

  // Implementando o store - jeito 2
  public listaUsuarios2: UsuarioModel[] = [];

  // Implementando o store - jeito 3
  public listaUsuarios3: UsuarioModel[] = [];

  // Implementando o store - jeito 4
  public listaUsuarios4: UsuarioModel[] = [];

  // Implementando o store - jeito 5
  public listaUsuarios5$: Observable<UsuarioModel[]> = this.store.select(
    fromUsuariosSelector.getUsuariosAdministradorPorParametro,
    { perfil: 'administrador' }
  );

  /*
  crie uma função que retorna um filtro de 5 elementos de um array, 
percorre o array inteiro e traz os 5 maiores ocorrências
  */
 public ordenaArrayMaiorParaMenorFiltra5PrimeirosElement(array: any[]): any{
    let maiorOcorrencia: any;

    // Percorre o array inteiro
    array.forEach((elemento) => {
      // Verifica se o elemento já existe no objeto
      if (maiorOcorrencia[elemento.nome]) {
        maiorOcorrencia[elemento.nome] += 1;
      } else {
        maiorOcorrencia[elemento] = 1;
      }
    });

    // Ordena o objeto de acordo com o valor
    let object: any;
    let ordenado = object.entries(maiorOcorrencia).sort((a: any, b: any) => b - a);

    return ordenado.slice(0, 5);

 }

  // // exemplo de como usar o sort()
  // public array = [1, 30, 4, 21, 100000];
  // // ordena o array do maior para o menor
  // public array1 = this.array.sort((a, b) => b - a);
  // //array.sort((a, b) => a - b)
 
 // exemplo de como usar o sort()
  // public lista5MaioresResultadosDoArray2(array: any[]): any{
  //   let maiorOcorrencia: any;

  //   // Percorre o array inteiro
  //   array.forEach((elemento) => {
  //     // Verifica se o elemento já existe no objeto
  //     if (maiorOcorrencia[elemento]) {
  //       // Se existir, incrementa o valor
  //       maiorOcorrencia[elemento] += 1;
  //     } else {
  //       // Se não existir, cria o elemento com o valor 1
  //       maiorOcorrencia[elemento] = 1;
  //     }
  //   });

  //   // Ordena o objeto de acordo com o valor
  //   const ordenado = Object.entries(maiorOcorrencia).sort(
  //     (a, b) => b[1] - a[1]
  //   );
    

  

  constructor(
    // Injetando o serviço UsuarioServiceService com store
    private store: Store<AppState> //private usuarioService: UsuarioServiceService
  ) {}

  ngOnInit() {
    // Implementando o store chamando action - jeito 1
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());

    // Jeito 2
    this.store
      .select(fromUsuariosSelector.getUsuariosAdministrador)
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios2 = usuarios;
      });

    // Jeito 3
    this.store
      .select(fromUsuariosSelector.getUsuarios)
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios3 = usuarios.filter(
          (usuario) => usuario.perfil == 'administrador'
        );
      });

    // Jeito 4
    this.store
      .select(fromUsuariosSelector.getUsuariosAdministradorPorParametro, {
        perfil: 'administrador',
      })
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios4 = usuarios;
      });
  }

  editar(id: number) {}
  excluir(id: number) {}
}
