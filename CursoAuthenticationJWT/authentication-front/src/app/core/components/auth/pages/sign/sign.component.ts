import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  // passo - 1 - criar variavel do tipo FormGroup
  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]], //, Validators.minLength(6)
  });

  // passoService - 7 - criar variavel para receber mensagem de erro
  public mgsError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService // passoService - 4 - chamar variavel do tipo AuthService
  ) {} // passo - 2 - chamar variavel do tipo FormBuilder
  ngOnInit() {}

  // passo - 3 - criar metodo para pegar os valores do formulario
  public submitForm(): void {
    console.log(this.formAuth);

    if (this.formAuth.valid) {
      console.log('Formulário válido');

      // passoService - 5 - chamar metodo para validar e salvar
      this.authService
        .sign({
          email: this.formAuth.value.email,
          password: this.formAuth.value.password,

          // passoService - 6 - chamando subscribe para monitorar nossas requisições
        })
        .subscribe({
          next: (res) => res,
          error: (e: any) => (this.mgsError = e.erro),
        });

    }
  }
}
