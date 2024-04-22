import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  constructor(private taskService: TasksService,private router: Router,private title:Title) {
    this.title.setTitle('Add Task');
   }

  ngOnInit(): void {
  }
  saveTask(name:any,description:any,dueDate:any):void{
    // if (!name || !description || !dueDate) {
    //   alert('Please fill out all fields.');
    //   return;
    // }
    if (!name.value || !description.value || !dueDate.value) {
      alert('Please fill out all fields.');
      return;
    }
    console.log('Saving task:', name, description, dueDate);
    this.taskService.saveTask(name.value, description.value ,dueDate.value);
    this.router.navigate(['/']);
    alert('Task saved successfully!');

  }
  resetFields(nameInput: any, descriptionInput: any, dueDateInput: any): void {
    if (nameInput && descriptionInput && dueDateInput) {
      nameInput.value = '';
      descriptionInput.value = '';
      dueDateInput.value = '';
    }
  }
}
