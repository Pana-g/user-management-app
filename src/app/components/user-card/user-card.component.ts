import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() user!: User;

  constructor(private router: Router) { }

  goToUserDetails() {
    this.router.navigate(['users/', this.user.id.name], { state: { user: this.user } });
  }

}
