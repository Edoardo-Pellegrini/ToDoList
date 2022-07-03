import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaginaListaComponent } from './pagina-lista/pagina-lista.component';

import { PaginaTestComponent } from './pagina-test/pagina-test.component';
import { FooterComponent } from './footer/footer.component';
import { Page404Component } from './page404/page404.component';




const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },

  { path: 'lista', component: PaginaListaComponent },

  { path: 'test', component: PaginaTestComponent },

  {path:'**',component:Page404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaListaComponent,

    PaginaTestComponent,
    FooterComponent,
    Page404Component,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
