import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importamos nuestros componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrudComponent } from './components/crud/crud.component';
import { ProfileComponent } from './components/profile/profile.component';

// Importamos los componentes de Angular Material
import { MaterialModule } from 'src/material.module';

// Importamos el módulo FormsModule y ReactiveFormsModule en nuestro módulo raíz para usar formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    GalleryComponent,
    DashboardComponent,
    CrudComponent,
    ProfileComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, // Importamos el módulo FormsModule en nuestro módulo raíz
    ReactiveFormsModule, // Importamos el módulo ReactiveFormsModule en nuestro módulo raíz para usar formularios reactivos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
