import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks = [
    {
      title: 'Title of the task',
      completed: false
    },
    {
      title: 'Another title of the task',
      completed: true
    }
  ]

  newTask: string;
  editedTask: string;

  completed: boolean = false;
  
  editTask: boolean = false;
  editedTaskIndex: number;
  
  // @Input()

  receiveNewTask(task) {
    this.newTask = task;
    this.addTask();
  }

  addTask() {
    if(!this.newTask) {
      console.log('Please Enter the Task!');
    }
    else {
      this.tasks.push({
        title: this.newTask,
        completed: this.completed
      });
    }
  }

  toggleCompletedTask(task) {
    this.toggleCompleted(task);  
  }

  toggleCompleted(task) {
    
    task.completed = !task.completed

  }

  deletedTodoTask(index) {
    this.deleteTodo(index);
  }
  
  deleteTodo(index) {
    
    this.tasks.splice(index, 1);

  }

  editedTodoTask(taskObj) {
    this.editTodo(taskObj.task, taskObj.index);
  }

  editTodo(task, i) {

    this.editTask = true;
    this.editedTask = task.title;
    this.editedTaskIndex = i;
    
  }

  receivedEditedTask(taskTitle) {
    this.editedTask = taskTitle;
    this.changeEdit();
  }

  changeEdit() {

    this.tasks[this.editedTaskIndex].title = this.editedTask;
    this.editTask = false;

  }

}
