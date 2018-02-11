import { Injectable } from '@angular/core';
import { List } from '../clases/lists';


@Injectable()
export class ListService {

    list: List[] = [];

    constructor(){
        this.load();
    }

    refresh(){
        localStorage.setItem("data", JSON.stringify(this.list));
    }
    load(){
        this.list = JSON.parse(localStorage.getItem('data')) || [];
    }
    addList(list:List){
        this.list.push(list);
        this.refresh();
    }
    deleteList(id:number){
        this.list.splice(id,1);
        this.refresh();
    }
}