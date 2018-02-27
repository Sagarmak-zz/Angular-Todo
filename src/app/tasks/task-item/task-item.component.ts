import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task;
  @Input() i;

  @Output() toggleCompleteEventEmit = new EventEmitter<any>();
  @Output() deleteTodoEventEmit = new EventEmitter<any>();
  @Output() editTodoEventEmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleCompleted(task) {
    this.toggleCompleteEventEmit.emit(task);
  }

  deleteTodo(index) {
    this.deleteTodoEventEmit.emit(index);
  }

  editTodo(task, index) {
    this.editTodoEventEmit.emit({task, index});
  }

  getStatus(completed) {
    return completed == true ? 'none' : 'line-through' ;
  }

}
