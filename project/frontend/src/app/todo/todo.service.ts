import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { TodoItem } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:5000/api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.apiUrl);
  }

  addTodo(text: string): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, { text });
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  markDone(id: string): Observable<TodoItem> {
    return this.http.patch<TodoItem>(`${this.apiUrl}/${id}`, { completed: true });
  }
}
