import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../models/item.model';
import { DateFormatPipe } from '../../pipes/date-format.pipe';



@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [DateFormatPipe],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent {
  item: Item | null = null;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const allItems = JSON.parse(localStorage.getItem('items') || '[]');
    this.item = allItems.find((item: Item) => item.imdbID === id) || null;
    console.log(this.item?.Poster)
  }
  backToItemsList() {
    this.router.navigate(['/']);

  }
}
