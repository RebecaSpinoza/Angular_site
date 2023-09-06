import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemResumoComponent } from './item-resumo/item-resumo.component';
import { ListaDesejosComponent } from './lista-desejos/lista-desejos.component';
import { ItemPromocaoComponent } from './item-promocao/item-promocao.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemResumoComponent,
    ListaDesejosComponent,
    ItemPromocaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
