import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'https://type.fit/api/quotes';

  constructor(private http: HttpClient) {}

  getQuotes() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
