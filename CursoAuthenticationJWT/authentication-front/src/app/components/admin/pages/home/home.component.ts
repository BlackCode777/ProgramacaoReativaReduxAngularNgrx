import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  nhOnInit() {}

  // passoService - 13 - criando metodo para deslogar o usuario
  public logout(): void {
    this.authService.logout();
  }

}
