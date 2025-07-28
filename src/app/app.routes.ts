import { Routes } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ItemsListComponent,
  },
  {
    path: 'item/:id',
    component: ItemDetailsComponent,
  },
];

