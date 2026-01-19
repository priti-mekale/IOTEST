import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';
import { UtilityServiceService } from '../../services/utility-service.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  
editTodo !: Itodo

  todosArray: Array<Itodo> = [
    {todo: 'HTML', id: this._uuid.uuid()},
    {todo: 'CSS', id: this._uuid.uuid()},
    {todo: 'TypeScript', id: this._uuid.uuid()}
  ]

  constructor(
    private _utilityService: UtilityServiceService,
    private _uuid:UuidService
  ) { }

  ngOnInit(): void {
  }

  getAddedTodo(obj: Itodo) {
    this.todosArray.push(obj)
    this._utilityService.showAlert(`New todo ${obj.todo} is added successfully!`, `alert-success`)
  }

  getEditedTodo(obj: Itodo) {
    this.editTodo = obj
  }

  getUpdatedTodo(obj: Itodo) {
    let ind = this.todosArray.findIndex(ele => ele.id == obj.id)
    this.todosArray[ind] = obj
    this._utilityService.showAlert(`Todo ${obj.todo} is updated successfully!`, `alert-success`)
  }

  getDeletedTodo(obj: Itodo) {
    let sure = confirm(`Are you sure to delete todo '${obj.todo}'?`)
    if(sure){
      let ind = this.todosArray.findIndex(ele => ele.id == obj.id)
      this.todosArray.splice(ind, 1)
      this._utilityService.showAlert(`Todo ${obj.todo} is deleted successfully!`, `alert-success`)
    }
    }
}