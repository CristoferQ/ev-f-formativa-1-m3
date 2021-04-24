import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';
import { ProductosComponent } from './productos/productos.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {
    path:'administrativos',
    component: AdministrativosComponent
  },
  {
    path:'corporacion',
    component: FormularioComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    ProductosComponent,
    AdministrativosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
