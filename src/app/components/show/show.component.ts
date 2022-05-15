import { Component, OnInit } from '@angular/core';

//Import model
import { Task } from 'src/app/task.model';

//Import service
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  Tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((result) => {
      this.Tasks = result.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Task)
        };
      });
    });
  }

  deleteTaskRow = (task) => this.taskService.deleteTask(task);
}
