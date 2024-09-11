import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, SearchBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management';
  searchboxVisible = true;

  constructor(private router: Router) {
    router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/') {
            this.searchboxVisible = true;
          } else {
            this.searchboxVisible = false;
          }
        }
      });
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
