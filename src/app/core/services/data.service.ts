import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[] = [];
  filter: Subject<string> = new Subject<string>();


  constructor() {

  }

  setUsers(users: User[]): void {
    this.users = users;
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUsers(): User[] {
    return this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  setFilter(text: string): void {
    this.filter.next(text);
  }

}
