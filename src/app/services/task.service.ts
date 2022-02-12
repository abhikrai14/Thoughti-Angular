import { Injectable } from '@angular/core';
import * as data from './sampleTask.json';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

sampleTaskData= data

  constructor() { }

  //Remove task 
  removeTask(index){
    this.sampleTaskData['default'].Tasks.splice(index,1);
  }

  //Add task
  addTask(data){
    this.sampleTaskData['default'].Tasks.push(data);
  }
}
