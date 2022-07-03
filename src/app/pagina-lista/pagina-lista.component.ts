import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';

import { Title } from '@angular/platform-browser';
import { ArrayService, Todo } from '../services/array.service';

@Component({
  selector: 'app-pagina-lista',
  templateUrl: './pagina-lista.component.html',
  styleUrls: ['./pagina-lista.component.scss']
})
export class PaginaListaComponent implements OnInit {
  array:Todo[]=[]
  constructor(private array1:ArrayService) { }

  ngOnInit(): void {
    this.array = this.array1.getArray()
  }

  addTask(ele:string):void{
    this.array1.addTask(ele)
  }

  removeTask(item:Todo):void{
    this.array1.removeTask(item)


  }
  cambiaStatus(item:Todo){
    this.array1.cambiaStatus(item)
  }



 /*  todolist:Todo[]=[];




  addTask(ele:string){

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
export let items:Todo[]=[]; */

}
