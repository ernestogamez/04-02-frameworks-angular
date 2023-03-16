import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  // Variable para saber si está logado
  logged: boolean;

  // Variable para almacenar el nombre del usuario logado
  username: string;

  // Con este subject puedo emitir en tiempo de ejecución
  private userLoggedIn$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private username$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router) {
    this.logged = false;
    this.username = '';
  }

  login(user: string, pass: string): boolean {
    console.log('username:', user);
    console.log('password:', pass);

    this.username = user;
    // this.getUsername();

    if (user === 'master8@lemoncode.net' && pass === '12345678') {
      this.userLoggedIn$.next(true);
      this.username$.next(user);
      this.logged = true;
      this.router.navigate(['/dashboard']);
      console.log(this.logged);
      return true;
    }

    this.logged = false;
    console.log(this.logged);
    alert('Datos incorrectos. Intenta de nuevo.');
    return false;
  }

  logout(): void {
    this.logged = false;
    this.userLoggedIn$.next(false);
    this.username$.next('');
    this.router.navigate(['/home']);
  }

  isLogged(): boolean {
    return this.logged;
  }

  getUsername(): string {
    console.log('El nombre de usuario es: ', this.username);
    return this.username;
  }

  // Devuelve la variable pero solo la parte observable
  isUserLoggedIn$(): Observable<boolean> {
    return this.userLoggedIn$.asObservable();
  }

  // Devuelve la variable pero solo la parte observable
  getUsername$(): Observable<string> {
    return this.username$.asObservable();
  }
}
