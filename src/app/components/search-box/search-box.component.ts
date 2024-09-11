import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  private searchText = new Subject<string>();


  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.searchText.pipe(
      map((text: string) => text.trim()),
      debounceTime(1000),
      distinctUntilChanged(),

    ).subscribe((text: string) => {
      this.dataService.setFilter(text)
    });
  }

  onSearch(event: any) {
    this.searchText.next(event.target.value);
  }
}
