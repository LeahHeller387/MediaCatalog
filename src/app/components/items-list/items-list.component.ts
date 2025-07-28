import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../../services/items.service';
import { Item, SortDirection } from '../../models/item.model';
import { ItemCardComponent } from '../item-card/item-card.component'
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, ReactiveFormsModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss',
})

export class ItemsListComponent {
  allItems = signal<Item[]>([]);
  selectedType = signal('');
  uniqueTypes: Record<string, number> = {};
  error: string | null = null;
  isGridView = signal(true);
  searchTerm = signal('');
  sortDirection = signal<SortDirection>('asc');
  private itemsService = inject(ItemsService);

  readonly filteredItems = computed(() => {
    const items = this.allItems();
    const selectedType = this.selectedType();
    const searchTerm = this.searchTerm();

    const direction = this.sortDirection();
    let filtered = items
    if (selectedType != '') {
      filtered = items.filter(item => item.Type === selectedType);
    }
    if (searchTerm != '') {
      filtered = filtered.filter(item =>
        item.Title.toLowerCase().includes(searchTerm) ||
        item.Year.includes(searchTerm)
      );
    }
    return filtered.sort((a, b) => {
      const r = a.Title.localeCompare(b.Title);
      return direction === 'asc' ? r : -r;
    });
  });


  constructor() {
    this.loadItems();
    effect(() => {

    });
  }


  loadItems(): void {
    this.itemsService.getItems().subscribe({
      next: (data) => {
        this.allItems.set(data);
        localStorage.setItem('items', JSON.stringify(this.allItems()))
        this.uniqueTypes = data.reduce((acc: Record<string, number>, item) => {
          acc[item.Type] = (acc[item.Type] || 0) + 1;
          return acc;
        }, {});
        this.error = null;
      },
      error: () => {
        this.error = 'אירעה שגיאה בטעינת הנתונים.';
      }
    });
  }


  changeSortDirection(): void {
    this.sortDirection() === 'asc'
      ? this.sortDirection.set('desc')
      : this.sortDirection.set('asc');
  }


  toggleGridView(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    if (input) {
      this.isGridView.set(input.checked);
    }
  }

  filterData(type: string): void {
    this.selectedType.set(type);
  }

  onSearchChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchTerm.set(value);
  }
}
