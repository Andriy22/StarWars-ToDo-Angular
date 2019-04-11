import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Task } from '../task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  taskForm: FormGroup;
  AllTasks: Task[]= [];
  constructor(private fb: FormBuilder, private Ts: ToDoService) { }

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: ['',[Validators.required]],
      body:['',[Validators.required]],
    })
    this.LoadAllTask();
  }
  onFormSubmit() {
    this.NewTask(this.taskForm.value);
    this.taskForm.reset();
  }
  LoadAllTask(){
    this.AllTasks = this.Ts.GetAllTasks();
  }
  NewTask(task: Task){
    this.Ts.CreateTask(task);
    this.LoadAllTask();
  }
  Done(task: Task){
    this.Ts.CheckTask(task);
    this.LoadAllTask();
  }
  Delete(task: Task){
    this.Ts.RemoveTask(task);
    this.LoadAllTask();
  }
}
