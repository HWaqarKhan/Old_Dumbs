import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks: Task[] = [];
  constructor(private taskService:TaskService ) { }

  ngOnInit(): void {
    this.GetAll();
  }
  GetAll():void{
    const getTasks =this.taskService.getTasks().subscribe((res)=>{
      this.tasks = res;      
      console.log("Tasks array : ", this.tasks);      
    }); //subscribe is promise
  }
  onDelete(e:Task){
    const deleteTasks =this.taskService.deteleTask(e).subscribe((res)=>{
      this.tasks = this.tasks.filter(t=>t.id !== e.id)
    });
  }
  
  onReminder(e:Task){
    e.reminder = !e.reminder;
    console.log(e.reminder);
    this.taskService.updateTask(e).subscribe(()=>{})
  }
  onCreate(e:any){
    const AddTasks =this.taskService.createTask(e).subscribe((res)=>{
      this.tasks.push(e);
    }); 
    console.log(e);
    
  }

}
