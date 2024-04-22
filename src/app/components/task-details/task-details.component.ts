import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit {
  taskid:any;
  task:any;
  constructor(private route: ActivatedRoute,private taskService: TasksService,private router: Router,private title:Title) { 
    this.title.setTitle ('Task details');
  }
  
  ngOnInit(): void {
    this.taskid=this.route.snapshot.paramMap.get('id');
    this.task=this.taskService.task[this.taskid];
  }
  updateTask(){
    this.taskService.updateTask(this.taskid,this.task);
    this.router.navigate(['/']);
  }
  deleteTask(){
    this.taskService.deleteTask(this.taskid);
    this.router.navigate(['/']);

  }
}
