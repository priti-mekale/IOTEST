import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodo } from '../../model/todo';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { UtilityServiceService } from '../../services/utility-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

 isEditMode: boolean = false
  @ViewChild('todoForm') todoForm!: NgForm
  @Output() outAddedTodo: EventEmitter<Itodo> = new EventEmitter()
  @Input() inpEditTodo !: Itodo
  @Output() outUpdatedTodo: EventEmitter<Itodo> = new EventEmitter()

  constructor(
    private _utilityService: UtilityServiceService,
    private _uuid:UuidService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inpEditTodo'].currentValue){
      this.isEditMode = true
      this.todoForm.form.patchValue(changes['inpEditTodo'].currentValue)
    }
  }

  onTodoAdd() {
    if(this.todoForm.valid){
      let obj = {...this.todoForm.value, id: this._uuid.uuid()}
      this.todoForm.resetForm()
      this.outAddedTodo.emit(obj)
    }else{
      this._utilityService.showAlert(`Fill all the required feilds!`, `alert-warning`)
    }
  }

  onTodoUpdate() {
    if(this.todoForm.valid){
      let obj = {...this.todoForm.value, id: this.inpEditTodo.id}
      this.todoForm.resetForm()
      this.outUpdatedTodo.emit(obj)
      this.isEditMode = false
    }else{
      this._utilityService.showAlert(`Feild can't be empty while updating!`, `alert-warning`)
    }    
  }

}
