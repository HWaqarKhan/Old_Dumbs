import { Component, EventEmitter, OnInit , Output} from '@angular/core';
import { Contact } from 'src/app/models/CM/contact';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  number!:string;
  @Output() addNumber:EventEmitter<Contact> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newTask:any = {
      number: this.number,
    };

    // @todo -emit event
    this.addNumber.emit(newTask)
    this.number = '';
  }
}
