import { Component, OnInit } from '@angular/core';
import { ListService } from '../../app/services/list.service';

import { NavController } from 'ionic-angular';
import { AddListComponent} from '../add-list/add-list.component';
import { DetailListComponent} from '../detail-list/detail-list.component';

@Component({
    selector:'app-pendientes',
    templateUrl:'pendientes.component.html'
})

export class PendientesComponent implements OnInit{
    
    constructor(private listService:ListService, private navCtonroller:NavController){
        console.log(this.listService);
    }

    ngOnInit(){

    }

    addList(){
        this.navCtonroller.push(AddListComponent);
    }

    viewDetail(list,id){
        this.navCtonroller.push(DetailListComponent,{list,id});

    }
}