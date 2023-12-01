import { Injectable } from '@angular/core';
import { Todo } from './Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  endpoint: string = 'http://localhost:3000/todos'

  getAll(): Promise<Todo[]> {
    return fetch(this.endpoint).then(res => res.json())
  }

  addOrUpdate(todo: Partial<Todo>, id?: number): Promise<Todo> {
    const fetchMethod = id ? 'PUT' : 'POST'
    const fetchEndpoint = id ? `${this.endpoint}/${id}` : this.endpoint
    return fetch(fetchEndpoint, {
      method: fetchMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(res => res.json())

  }

  remove(id: number): Promise<string> {
    return fetch(`${this.endpoint}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.text()).then(msg => msg = 'deleted')
  }

  getOnlyCompleted(): Promise<Todo[]> {
    return this.getAll().then(res => res.filter(el => el.completed))
  }

}

