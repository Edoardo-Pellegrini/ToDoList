import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-lista',
  templateUrl: './pagina-lista.component.html',
  styleUrls: ['./pagina-lista.component.scss']
})
export class PaginaListaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.todolist)
    this.todolist
  }
  todolist:Todo[]=[];




  addTask(ele:string){
    /* alert(ele) */
    this.todolist.push({id:this.todolist.length,title:ele,completed:false})
    console.log(this.todolist)
    let input = document.querySelector('input') as HTMLInputElement
    input.value = ''





  }
  removeTask(item:Todo):void{
    let index = this.todolist.indexOf(item)
    item.completed = false;
    this.todolist.splice(index,1)
    let index2 = this.todolist.indexOf(item)
    items.splice(index2,1)


  }
  cambiaStatus(item:Todo){
    if(item.completed == true){
      item.completed = false;
      let index = this.todolist.indexOf(item)
      items.splice(index,1)

    }else if(item.completed == false){
      item.completed = true
      items.push(item)
    }

  }
}
export interface Todo{
  id:number;
  title:string;
  completed:boolean

}
export let items:Todo[]=[];

