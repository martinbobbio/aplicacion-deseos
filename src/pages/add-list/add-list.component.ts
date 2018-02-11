import { Component, OnInit } from '@angular/core';
import { List } from '../../app/clases/lists';
import { ListItem } from '../../app/clases/lists-item';

import { AlertController, NavController } from 'ionic-angular';
import { ListService } from '../../app/services/list.service';


@Component({
    selector: 'app-add-list',
    templateUrl: './add-list.component.html',
})
export class AddListComponent implements OnInit {

    nameList:string = "";
    nameItem:string = "";

    items:ListItem[] = [];

    constructor(public listService:ListService, public alertController:AlertController, public navController:NavController) { }

    ngOnInit() { }

    addItem(){

        if(this.nameItem.length == 0){
            return 0;
        }

        let item = new ListItem();
        item.name = this.nameItem;
        
        this.items.push(item);
        this.nameItem = "";
    }

    deleteItem(id:number){
        this.items.splice(id,1);
    }
    
    addList(){
        if(this.nameList.length == 0){
            let alert = this.alertController.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es necesario',
                buttons: ['OK']
              });
              alert.present();
            return;
        }
        let lista = new List(this.nameList);
        lista.items = this.items;

        //this.listService.list.push(lista);
        this.listService.addList(lista);
        this.navController.pop();
    }
}