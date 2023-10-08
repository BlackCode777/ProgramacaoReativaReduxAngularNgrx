import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <a [routerLink]="['admin']">Admin</a>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'authentication-front';
}
