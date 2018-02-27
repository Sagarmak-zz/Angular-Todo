import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() tasks;

  @Output() toggleCompletedEventEmit2 = new EventEmitter<any>();
  @Output() deleteTodoEventEmit2 = new EventEmitter<any>();
  @Output() editTodoEventEmit2 = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleCompleted(task) {    
    this.toggleCompletedEventEmit2.emit(task);
  }

  deletedTodo(index) {
    this.deleteTodoEventEmit2.emit(index);
  }

  editedTodo(taskObj) {
    this.editTodoEventEmit2.emit(taskObj);
  }

}
