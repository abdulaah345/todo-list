import { Component,OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(public taskService: TasksService,private title:Title) {
    this.title.setTitle('Home Component');
   }

  ngOnInit(): void {
  }
  deleteTask(i:number){
    this.taskService.deleteTask(i);
  } 
  toggleTaskStatus(i: number): void {
    this.taskService.task[i].completed = !this.taskService.task[i].completed;
  }
  
}
