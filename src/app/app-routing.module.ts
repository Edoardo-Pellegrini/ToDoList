import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaListaComponent } from './pagina-lista/pagina-lista.component';

import { PaginaTestComponent } from './pagina-test/pagina-test.component';
const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: PaginaListaComponent },

  { path: 'test', component: PaginaTestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
