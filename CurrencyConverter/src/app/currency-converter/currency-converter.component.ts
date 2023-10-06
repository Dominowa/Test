import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  rates: any = {};
  currencies: string[] = ['USD', 'EUR', 'UAH'];
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  fromValue: number = 1;
  toValue: number = 0;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencyRates().subscribe((data) => {
      this.rates = data.rates;
      this.convert();
    });
  }

  convert(): void {
    const fromRate = this.rates[this.fromCurrency];
    const toRate = this.rates[this.toCurrency];
    this.toValue = this.fromValue * (toRate / fromRate);
  }

  updateConversion(): void {
    this.convert();
  }
}
