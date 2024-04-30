import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; 
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  // Getter conveniente para acceder a los controles de formulario
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // Detener si el formulario es inválido
    if (this.loginForm.invalid) {
      return;
    }
    // Aquí iría la lógica de autenticación del usuario
    console.log(this.loginForm.value);
  }
}
