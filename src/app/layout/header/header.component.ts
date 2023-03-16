import { Component } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logged: boolean;
  username: string;

  constructor(private service: UserLoginService) {
    this.logged = false;
    this.username = '';
    this.getUsername();

    // La forma más eficiente de actualizar si el usuario está logado es creando un observable al que suscribirse, que emita cada vez que el valor cambia
    this.service.isUserLoggedIn$().subscribe(
      value => this.logged = value
    );
  }

  logout(): void {
    this.service.logout();
    this.service.isUserLoggedIn$().subscribe(
      value => this.logged = value
    );
    console.log("Logout");
    console.log("logged cabecera: ", this.logged);
  }

  getUsername(): void {
    console.log("Dentro de cabecera getUsername");
    console.log("username1: ", this.username);


    this.service.getUsername$().subscribe(
      value => this.username = value
    );
    console.log("username2: ", this.username);
  }
}
