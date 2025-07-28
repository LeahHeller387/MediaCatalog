import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class ItemsService {
  private jsonUrl = 'assets/angular_Response.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<{ results: Item[] }>(this.jsonUrl).pipe(
      map(response => response.results),
      catchError(error => {
        console.error('שגיאה בטעינת הנתונים:', error);
        return throwError(() => new Error('שגיאה בטעינת הנתונים'));
      })
    );
  }
}
