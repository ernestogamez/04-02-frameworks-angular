import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserEntity } from 'src/app/model/user-entity';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // Variables para el formulario reactivo
  loginForm: FormGroup; // Grupo de individuos (formulario por ejemplo)
  userControl: FormControl; // Representa un control individual (input, box, etc)
  passControl: FormControl;

  // Creamos una variable en el componente de tipo MemberEntity
  user: UserEntity;

  constructor(private service: UserLoginService, private router: Router) {
    // Inicializo la variable
    this.user = {
      username: '',
      password: '',
    };

    // Inicializo las variables del formulario reactivo
    this.userControl = new FormControl(this.user.username, [
      Validators.required,
      Validators.email,
    ]);
    this.passControl = new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(8),
    ]);

    this.loginForm = new FormGroup({});
    this.loginForm.addControl('user', this.userControl);
    this.loginForm.addControl('pass', this.passControl);
  }

  login(): void {
    console.log("Dentro de login");
    this.service.login(this.userControl.value, this.passControl.value);
  }
}
