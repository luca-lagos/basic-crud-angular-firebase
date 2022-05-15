import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/task.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  public taskForm: FormGroup = new FormGroup({});

  constructor(
    public taskService: TaskService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.taskForm = this.formBuilder.group({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.taskService.createTask(this.taskForm.value);
    this.router.navigate(['']);
  }
}
