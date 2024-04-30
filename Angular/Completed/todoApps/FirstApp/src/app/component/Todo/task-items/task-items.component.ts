import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.scss']
})
export class TaskItemsComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteTask:EventEmitter<Task> = new EventEmitter()
  @Output() toggleTask:EventEmitter<Task> = new EventEmitter()
  public timeIcon = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:any){
     console.log(`${task.text}'s Task is deleted!`);
     this.deleteTask.emit();
    }
    onToggle(task:any){
     this.toggleTask.emit();

   }

}
