import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './component/Todo/tasks/tasks.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './component/CM/contact/contact.component';
import { NumberComponent } from './component/CM/number/number.component';
import { HeaderComponent } from './component/Todo/header/header.component';
import { ButtonComponent } from './component/Todo/button/button.component';
import { TaskItemsComponent } from './component/Todo/task-items/task-items.component';
import { AddTaskComponent } from './component/Todo/add-task/add-task.component';
import { MainComponent } from './component/main/main.component';
import { ContactsListComponent } from './component/CM/contacts-list/contacts-list.component';
import { RDFComponent } from './component/rdf/rdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemsComponent,
    AddTaskComponent,
    ContactComponent,
    NumberComponent,
    MainComponent,
    ContactsListComponent,
    RDFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
