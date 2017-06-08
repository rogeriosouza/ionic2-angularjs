import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from "ionic-angular";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {EditarProdutoPage} from "../editar-produto/editar-produto";





  export class Produto{

    id:string;
    produto:string;
    descricao:string;
    quantidade:number;
    email:string;
    telefone:string;
    endereco:string;
  }



@IonicPage()


@Component({
  selector: 'page-lista-produto',
  templateUrl: 'lista-produto.html',
})


/*
export class EditarProdutoPage{
  produto:Produto;

}
*/


export class ListaProdutoPage {
    lista : FirebaseListObservable<any>;
    produto: Produto;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
              public modal: ModalController) {

    //nometabela firebase listadepro
    this.lista = this.af.list("/produtos"); //ver af.database.list
    this.produto= new Produto();



  }



  cadastrar(){
      this.lista.push(this.produto).then(()=>{

        this.produto = new Produto();
      })
  }

  editar(id){

    this.modal.create(EditarProdutoPage,{id: id} ).present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaProdutoPage');
  }

}
