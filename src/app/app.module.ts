import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticuloFamiliasComponent } from './components/articulo-familias/articulo-familias.component';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbPaginationModule, HttpClientModule, 
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticuloFamiliasComponent },
    ])
  ],
  declarations: [AppComponent, InicioComponent, ArticuloFamiliasComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
