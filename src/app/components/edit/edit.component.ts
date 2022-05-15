import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/task.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  public editForm: FormGroup = new FormGroup({});
  taskRef: any;
  constructor(
    public taskService: TaskService,
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
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

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.taskService.getTaskById(id).subscribe((result) => {
      this.taskRef = result;
      this.editForm = this.formBuilder.group({
        title: [this.taskRef.title],
        description: [this.taskRef.description],
        author: [this.taskRef.author],
      });
    });
  }

  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.taskService.updateTask(this.editForm.value, id);
    this.router.navigate(['']);
  }
}
