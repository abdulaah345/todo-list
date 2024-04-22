import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  task: Task[] =[
   
  ]
  constructor() { 
    let storeTask=localStorage.getItem('task');
    if(storeTask){

      this. task=JSON.parse (storeTask);
    }
    else{
      this.task=[];
    }
  }
  deleteTask(i:number){
    this.task.splice(i, 1);
    this.storeTask();

  }
  saveTask(name:any,description:any,dueDate:any){
    this.task.push({
      name,
      description,
      dueDate,
      status,
      completed: false       
    })
    this.storeTask();

  }
  updateTask(id: any,item: any){
    this.task[id]=item;
   this.storeTask();
  }

  storeTask(){
    localStorage.setItem('task',JSON.stringify(this.task));
  }
  toggleTaskStatus(i: number): void {
    if (i >= 0 && i < this.task.length) {
      this.task[i].completed = !this.task[i].completed;
      this.storeTask();
    }
  }
}
