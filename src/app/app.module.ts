import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemResumoComponent } from './item-resumo/item-resumo.component';
import { ListaDesejosComponent } from './lista-desejos/lista-desejos.component';
import { ItemPromocaoComponent } from './item-promocao/item-promocao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemResumoComponent,
    ListaDesejosComponent,
    ItemPromocaoComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
