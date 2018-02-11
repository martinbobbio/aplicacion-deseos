import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../clases/lists';

@Pipe({name: 'pendientes',pure: false})
export class PendientesPipe implements PipeTransform {
    transform(lists: List[], status:boolean = false): List[] {
        let listAux:List[] = [];
        for(let list of lists){
            if(list.completed == status){
                listAux.push(list)
            }
        }

        return listAux;
    }
}