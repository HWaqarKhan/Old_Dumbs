import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UIServiceService } from 'src/app/service/uiservice.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  text!:string;
  day!:string;
  reminder:boolean = false;
  showAddTask!:boolean;
  subscription!:Subscription;
  @Output() addTask:EventEmitter<Task> = new EventEmitter()

  constructor(private uiService: UIServiceService) { 
    this.subscription = uiService.onToggle().subscribe((res)=>{
      this.showAddTask = res;
    })
   
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const newTask:any = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // @todo -emit event
    this.addTask.emit(newTask)
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
