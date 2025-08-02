
import { Component, OnInit } from '@angular/core';
import  { TodoService } from './todo.service';
import  { TodoItem } from './todo.model';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Navbarn } from '../navbarn/navbarn';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterOutlet, Navbarn, Footer, FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class Todo implements OnInit {                   // ✅ Add OnInit lifecycle hook

  todos: TodoItem[] = [];                               // ✅ Store todos
  newTask: string = '';                                 // ✅ Two-way bound input

  constructor(private todoService: TodoService) {}      // ✅ Inject service

  ngOnInit(): void {
    this.loadTodos();                                   // ✅ Load todos on page load
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  addTodo(): void {
    if (!this.newTask.trim()) return;

    this.todoService.addTodo(this.newTask).subscribe(newTodo => {
      this.todos.push(newTodo);
      this.newTask = '';
    });
  }

  deleteTodo(id: string | undefined): void {
    if (!id) return;

    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo._id !== id);
    });
  }

  markDone(id: string | undefined): void {
    if (!id) return;

    this.todoService.markDone(id).subscribe(updated => {
      this.todos = this.todos.map(todo =>
        todo._id === id ? updated : todo
      );
    });
  }
}

