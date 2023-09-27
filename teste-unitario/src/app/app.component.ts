import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-unitario';

  // Crindo uma função de soma para testar o coverage
  somar(a: number, b: number): number {
    return a + b;
  }

}
