import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './component/CM/contacts-list/contacts-list.component';
import { MainComponent } from './component/main/main.component';
import { RDFComponent } from './component/rdf/rdf.component';
import { TasksComponent } from './component/Todo/tasks/tasks.component';

const routes: Routes = [
  // { path:'', component: MainComponent,
  // children},
  // { path:'tasks', component: TasksComponent},
  // { path:'contact', component: ContactComponent}

  {
    path: '',
    component: MainComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'todo', // child route path
        component: TasksComponent, // child route component that the router renders
      },
      {
        path: 'contact',
        component: ContactsListComponent, // another child route component that the router renders
      },
      {
        path: 'form',
        component: RDFComponent, // another child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
