import { Component, Input, OnInit } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/models/CM/contact';
import { PhoneNumber } from 'src/app/models/CM/phonenumber';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  public contacts: Contact[] = [];
  public timeIcon = faTimes;
  constructor(private cService:TaskService ) { }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll():void{
    const getTasks =this.cService.getContacts().subscribe((res)=>{
      this.contacts = res;      
      console.log("contacts array : ", this.contacts); 
      const id = this.contacts.find(id=>id.id===5)  
      console.log('Contact ID is :', id);       
      console.log("contacts Number : ", this.contacts.find(p=>p.number===id?.number ));           
    }); //subscribe is promise
  }
  onDelete(e:Contact){
    const deleteTasks =this.cService.deteleTask(e).subscribe((res)=>{
      this.contacts = this.contacts.filter(t=>t.id !== e.id)
    });
  }
  onReminder(e:Contact){
    console.log(e.number);
    this.cService.updateTask(e).subscribe((res)=>{
      console.log(`Contact Selected : ${res}`)
    })
  }

}
