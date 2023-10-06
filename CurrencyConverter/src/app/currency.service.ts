import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private currencyDataUrl = 'assets/currency-data.json';

  constructor(private http: HttpClient) {}

  getCurrencyRates(): Observable<any> {
    return this.http.get(this.currencyDataUrl);
  }
}
