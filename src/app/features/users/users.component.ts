import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { DataService } from '../../core/services/data.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { ShimmerCardComponent } from '../../components/shimmer-card/shimmer-card.component';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserCardComponent, ShimmerCardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading: boolean = true;
  lastUpdated: Date = new Date();
  filterText: string = '';


  constructor(private apiService: ApiService, private dataService: DataService) { }

  ngOnInit() {
    this.lastUpdated = new Date(localStorage.getItem('lastUpdated') || new Date());
    this.fetchUsers();
    this.dataService.filter.subscribe((text: string) => {
      this.filterText = text;
      this.filterUsers(text);
    });
  }

  refreshUsers() {
    this.fetchUsers(true);
  }

  filterUsers(text: string) {
    this.users = this.dataService.users.filter((user: any) => user.name.first.toLowerCase().includes(text.toLowerCase()) ||
      user.name.last.toLowerCase().includes(text.toLowerCase()) ||
      user.email.toLowerCase().includes(text.toLowerCase()));
  }

  async fetchUsers(force = false) {
    // Fetch users from the server if the users in the data service are empty
    if (this.dataService.getUsers().length == 0 || force) {
      this.loading = true;
      this.dataService.setUsers([]);
      setTimeout(() => {
        console.log('Fetching users from the server');
        this.apiService.getUsers().subscribe((data: any) => {
          const users = data.results;
          this.dataService.setUsers(users);
          this.filterUsers(this.filterText);
          this.lastUpdated = new Date();
          localStorage.setItem('lastUpdated', this.lastUpdated.toString());
          this.loading = false;
        });

      }, 1000);
    } else {
      this.loading = false;
      this.users = this.dataService.getUsers();
    }
  }

}
