import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular'
import { List } from '../../app/clases/lists';
import { ListItem } from '../../app/clases/lists-item';
import { ListService } from '../../app/services/list.service';

@Component({
    selector: 'app-detail-list',
    templateUrl: './detail-list.component.html',
})
export class DetailListComponent implements OnInit {

    id:number;
    list:List;

    constructor(public narController:NavController, public navParams:NavParams,public listService:ListService, public alertController:AlertController) {
        console.log(this.navParams)
        this.id = this.navParams.get("id");
        this.list = this.navParams.get("list");
    }

    ngOnInit() { }

    refresh(item:ListItem){
        item.completed = !item.completed;

        let allComplete = true;
        for(let item of this.list.items){
            if(!item.completed){
                allComplete = false;
                break;
            }
        }
        this.list.completed = allComplete;

        this.listService.refresh();

    }

    deleteItem(){
        let confirm = this.alertController.create({
            title: this.list.name,
            message: '¿Está seguro que quiere borrar la lista?',
            buttons: ['Cancelar',
              {
                text: 'Eliminar',
                handler: () => {
                  this.listService.deleteList(this.id);
                  this.narController.pop();
                }
              }
            ]
          });
          confirm.present();
    }
}