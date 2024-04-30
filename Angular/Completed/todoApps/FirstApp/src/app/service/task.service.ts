import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/CM/contact';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private Taskapi = "http://localhost:3001/tasks";
  private Contactapi = "http://localhost:3001/ContactManager";

  httpOptions = {
    headers:new HttpHeaders({
      'content-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    // const tasks = of(TASKS); //when api connect we dont use of func coz angular http auto return observable
    return this.http.get<Task[]>(this.Taskapi); 
  }
  deteleTask(task:Task):Observable<Task>{
    return this.http.delete<Task>(`${this.Taskapi}/${task.id}`)
  }
  updateTask(task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.Taskapi}/${task.id}`, task ,this.httpOptions)
  }
  createTask(task:Task):Observable<Task>{
    return this.http.post<Task>(`${this.Taskapi}`, task ,this.httpOptions)
  }
  //contacts
  getContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.Contactapi); 
  }
  deteleContact(contact:Contact):Observable<Contact>{
    return this.http.delete<Contact>(`${this.Contactapi}/${contact.id}`)
  }
  updateContact(contact:Contact):Observable<Contact>{
    return this.http.put<Contact>(`${this.Contactapi}/${contact.id}`, Contact ,this.httpOptions)
  }
  createContact(contact:Contact):Observable<Contact>{
    return this.http.post<Contact>(`${this.Contactapi}`, contact ,this.httpOptions)
  }
}
