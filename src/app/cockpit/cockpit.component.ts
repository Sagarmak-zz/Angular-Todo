import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newTask: string;
  @Input() editTask: boolean;
  @Input() editedTask: string;

  @Output() taskEventEmit = new EventEmitter<any>();
  @Output() editedTaskEventEmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  sendTaskToApp() {
    this.taskEventEmit.emit(this.newTask);
  }

  changeEdit() {
    this.editedTaskEventEmit.emit(this.editedTask);
  }

}
