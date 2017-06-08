import {Component, Input} from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import {Produto} from "../lista-produto/lista-produto";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";



@Component({

  selector: 'page-editar-produto',
  templateUrl: 'editar-produto.html',


})
export class EditarProdutoPage {
  ref : FirebaseObjectObservable<any>;
  id: string;
  produtos : Produto;
  nometeste: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCrtl: ViewController,
              public af: AngularFireDatabase){


    this.id = this.navParams.get('id');
    this.ref = this.af.object('/produtos/' + this.id);

  }

  salvar(){
    this.ref.update(this.produtos).then(()=>{
      this.viewCrtl.dismiss();
    });
  }
  fechar(){
    this.viewCrtl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarProdutoPage');
  }

}
