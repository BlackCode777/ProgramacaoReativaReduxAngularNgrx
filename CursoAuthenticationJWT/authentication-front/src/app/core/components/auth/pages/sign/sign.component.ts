import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {} // passo - 2 - chamar variavel do tipo FormBuilder
  ngOnInit() {}

  // passo - 3 - criar metodo para pegar os valores do formulario
  public submitForm(): void {
    console.log(this.formAuth.value);

    if (this.formAuth.valid) {
      console.log('Formulário válido');

      // passo - 4 - criar metodo para salvar os valores do formulario c/service

    }

  }
}
