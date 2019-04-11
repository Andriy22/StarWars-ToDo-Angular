import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  ToDoList: Task[] = [];
  constructor() { }

  CreateTask(task : Task){

    console.log(task.body+ ' ' + task.title);
    task.check=false;
    task.id = this.ToDoList.length+1;
    this.ToDoList.push(task);
    console.log('Task created');

  }
  RemoveTask(task: Task){
    let index= this.ToDoList.indexOf(task);
    this.ToDoList.splice(index,1);
    console.log('Task remove');
  }
  CheckTask(task: Task){
    console.log(task);
    let index = this.ToDoList.indexOf(task);
    this.ToDoList[index].check=true;
  }
  GetAllTasks(): Task[]
  {
    return this.ToDoList;
  }

}
