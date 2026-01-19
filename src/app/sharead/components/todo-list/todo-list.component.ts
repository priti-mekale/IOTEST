import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() inpTodosArray !: Array<Itodo>
  @Output() outEditTodo : EventEmitter<Itodo> = new EventEmitter()
  @Output() outDeleteTodo : EventEmitter<Itodo> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onTodoEdit(obj: Itodo) {
    this.outEditTodo.emit(obj)
  }

  onTodoDelete(obj: Itodo) {
    this.outDeleteTodo.emit(obj)
  }

}