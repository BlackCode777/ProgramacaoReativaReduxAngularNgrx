import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  ngOnInit(){
    /*
    
    
    // 2º caso de uso
    const arrayDeDentro3 = ['Joana', 'Alves', 'Miranda'];
    const arrayDeDentro2 = ['Simone', 'Ferreira', 'Andrade', arrayDeDentro3];
    const arrayDeDentro = ['Anderson', 'Santos', 'Silva', arrayDeDentro2];
    const array2 = [
      [1, 2, 3],
      ['a', 'b', 'c', arrayDeDentro],
      [true, false, true],
    ];

    // Percorrendo o array da data - array2
    for (let i = 0; i < array2[0].length; i++) {
      console.log('array2[0][i]', array2[0][i]);

      // Percorrendo array de dentro mapDatas - arrayDeDentro
      for (let j = 0; j < array2[1].length; j++) {
        console.log('array2[1][j] _ ', array2[1][j]);

        // Percorrendo array de dentro mapDatas - arrayDeDentro2
        if (Array.isArray(array2[1][3])) {
          for (let k = 0; k < array2[1][3].length; k++) {
            console.log('array2[1][3][k] _ ', array2[1][3][k]);

            // Percorrendo array de dentro mapDatas - arrayDeDentro3
            if (Array.isArray(array2[1][3][3])) {
              for (let l = 0; l < array2[1][3][3].length; l++) {
                console.log('array2[1][3][3][l] _ ', array2[1][3][3][l]);
              }
            }
          }
        }
      }
    }

    // Iterando neste array
    for (const key in array2) {
      if (array2.hasOwnProperty(key)) {
        const element = array2[key];
        console.log('element', element);
      }
    }

    // 1º caso de uso
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    // Iterando neste array
    for (const key in array) {
      if (array.hasOwnProperty(key)) {
        const element = array[key];
        console.log('element', element);
      }
    }
    // Ou pode ser desta forma tb
    for (let i = 0; i < array.length; i++) {
      console.log('array[i]', array[i]);
    }

    
    */
  }

}

/*

title = 'teste-unitario';
  // Crindo uma função de soma para testar o coverage
  somar(a: number, b: number): number {
    return a + b;
  }

*/
