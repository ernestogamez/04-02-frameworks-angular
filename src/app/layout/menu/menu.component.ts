import { Component } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  logged: boolean;

  constructor(private service: UserLoginService) {
    this.logged = service.isLogged();
    console.log("logged: ", this.logged);

    // La forma más eficiente de actualizar si el usuario está logado es creando un observable al que suscribirse, que emita cada vez que el valor cambia
    this.service.isUserLoggedIn$().subscribe(
      value => this.logged = value
    );
  }


}
