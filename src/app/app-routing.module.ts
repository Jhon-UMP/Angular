import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Se importa el componente creado llamado catalogo
import { CatalogoComponent } from './components/catalogo/catalogo.component';
// Se importa el componente creado llamado about
import { AboutComponent } from './components/about/about.component';
// Se importa el componente creado llamado login
import { LoginComponent } from './components/login/login.component';

// En el array routes incluir el objeto como esta definido a continuacion
const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'perfil',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
