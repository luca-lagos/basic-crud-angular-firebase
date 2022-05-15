import { Injectable } from '@angular/core';

//Imports firestore bbdd modules
import { AngularFirestore } from '@angular/fire/compat/firestore';

//Imports model
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private angularFirestore: AngularFirestore) {}

  //Metodos de CRUD
  //Get all tasks
  getTasks() {
    return this.angularFirestore.collection('tasks').snapshotChanges();
  }

  //Get a task by Id
  getTaskById(id) {
    return this.angularFirestore.collection('tasks').doc(id).valueChanges();
  }

  //Create a task
  createTask(task: Task) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('tasks')
        .add(task)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  //Update a task by id
  updateTask(task: Task, id) {
    return this.angularFirestore.collection('tasks').doc(id).update({
      title: task.title,
      descripction: task.description,
      author: task.author,
    });
  }

  //Delete task by id
  deleteTask(task: Task) {
    return this.angularFirestore.collection('tasks').doc(task.id).delete();
  }
}
