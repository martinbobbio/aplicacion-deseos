import { ListItem } from './lists-item';

export class List{
    name:string;
    completed:boolean;
    items:ListItem[];

    constructor(name:string){
        this.name = name;
        this.completed = false;

    }

}