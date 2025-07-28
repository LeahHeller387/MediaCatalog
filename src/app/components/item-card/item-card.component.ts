import { Component, Input, SimpleChanges, OnChanges, inject, signal } from '@angular/core';
import { Item } from '../../models/item.model';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { Router } from '@angular/router';
import { TitleUpdateService } from '../../services/title-update.service';


@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, DateFormatPipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent implements OnChanges {
  @Input() item!: Item;
  titleIsEdit = signal<boolean>(false);
  private router = inject(Router);
  private titleUpdateService = inject(TitleUpdateService);
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      console.log('Item received:', this.item);
    }
  }
  editTitle(): void {
    this.titleIsEdit.set(true);
  }
  finishEdit(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim();
    if (value != this.item.Title) {
      this.item.Title = value
      this.titleUpdateService.putRequestHttp(this.item).subscribe({
        next: () => {
          console.log('success')
        },
        error: () => {
          console.log('error')
        }
      });
    }
    this.titleIsEdit.set(false);
  }
  hideImage(): void {
    this.item.Poster = null;
  }
  goToItemDetails(): void {
    this.router.navigate(['/item', this.item.imdbID]);
  }
}
