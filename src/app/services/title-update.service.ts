import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleUpdateService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  putRequestHttp(item: Item): Observable<any>  {
    return this.http.put(
      `${this.baseUrl}/items/${item.imdbID}`,
      { title: item.Title }
    );

  }
}
