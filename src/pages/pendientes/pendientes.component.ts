import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AddListComponent} from '../add-list/add-list.component';
import { DetailListComponent} from '../detail-list/detail-list.component';

@Component({
    selector:'app-pendientes',
    templateUrl:'pendientes.component.html'
})

export class PendientesComponent implements OnInit{
    
    constructor(private navCtonroller:NavController){

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