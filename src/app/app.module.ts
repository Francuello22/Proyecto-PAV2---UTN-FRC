import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { CortarCantidadCaracteres } from './pipes/custom-pipe.pipe';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticuloFamiliasComponent } from './components/articulo-familias/articulo-familias.component';
import {
  ArticulosComponent,
  ActivoPipe,
} from './components/articulos/articulos.component';

import {
  NgbModalModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './shared/my-interceptor';

@NgModule({
  imports: [
    NgbModalModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticuloFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent },
    ]),
  ],
  declarations: [
    ModalDialogComponent,
    AppComponent,
    ActivoPipe,
    InicioComponent,
    ArticuloFamiliasComponent,
    ArticulosComponent,
    MenuComponent,
    CortarCantidadCaracteres
  ],
  entryComponents: [ModalDialogComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
