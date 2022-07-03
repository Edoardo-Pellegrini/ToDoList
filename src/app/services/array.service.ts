import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  todolist:Todo[]=[];
  constructor() {}

  getArray():Todo[]{
    return this.todolist
  }
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



