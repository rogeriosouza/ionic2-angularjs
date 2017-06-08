import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaProdutoPage} from "../lista-produto/lista-produto";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }


  goToListaPage() {

    this.navCtrl.push(ListaProdutoPage);
  }

}
