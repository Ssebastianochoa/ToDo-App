import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  taskList: string[] = ['texto tarea 1', 'texto tarea 2', 'texto tarea 3'];

  eliminarTask(taskIndex: number) {
    this.taskList.splice(taskIndex, 1);
  }

  addTarget(newTask: string) {
    this.taskList.push(newTask)
  }
}
