import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './sharead/components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './sharead/components/todo-form/todo-form.component';
import { TodoListComponent } from './sharead/components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,FormsModule, BrowserAnimationsModule,MatButtonModule,MatSnackBarModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
