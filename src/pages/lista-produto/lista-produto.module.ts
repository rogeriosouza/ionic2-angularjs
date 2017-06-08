import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaProdutoPage } from './lista-produto';
import {EditarProdutoPage} from "../editar-produto/editar-produto";

@NgModule({
  declarations: [
    ListaProdutoPage,
    EditarProdutoPage
  ],
  imports: [
    IonicPageModule.forChild(ListaProdutoPage),
  ],
  exports: [
    ListaProdutoPage
  ]
})
export class ListaProdutoPageModule {}
