import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailListComponent} from '../detail-list/detail-list.component';

@Component({
    selector:'app-terminados',
    templateUrl:'terminados.component.html'
})

export class TerminadosComponent implements OnInit{
    
    constructor(private navCtonroller:NavController){

    }

    ngOnInit(){

    }

    viewDetail(list,id){
        this.navCtonroller.push(DetailListComponent,{list,id});

    }
}