import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UIServiceService } from 'src/app/service/uiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(
    private Ui: UIServiceService) {
    this.subscription = Ui.onToggle().subscribe((res) => {
      this.showAddTask = res;
    })
  }

  ngOnInit(): void {
  }
  AddTask() {
    console.log("Add Task using Event Emiiter!");
    this.Ui.toggleAddTask();
  }
}
