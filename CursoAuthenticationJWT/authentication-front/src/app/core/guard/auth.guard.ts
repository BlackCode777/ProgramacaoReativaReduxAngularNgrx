import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {

  // passoSeervice - 15 - criando metodo para verificar se o usuario esta logado
  constructor(public router: Router, public authService: AuthService) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot


  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      // passoService - 16 - criando condicional caso usuario nao esteje logado ele vai ser redirecionado para outra rota
      if (!this.authService.isAuthenticaded()) {
        this.router.navigate(['']);
        return false;
      } 
      return true;
    }
}
