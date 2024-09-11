import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  dataService: DataService = inject(DataService);
  user: User | undefined;

  ngOnInit() {
    this.user = this.dataService.getUsers().find((user: any) => user.id.name === this.route.snapshot.params['id']);
  }

  goToGoogleMaps() {
    window.open(`https://www.google.com/maps?q=${this.user?.location.coordinates.latitude},${this.user?.location.coordinates.longitude}`);
  }
}
