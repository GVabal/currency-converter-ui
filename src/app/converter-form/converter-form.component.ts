import {Component, OnInit} from '@angular/core';
import {CurrencyType} from './CurrencyType';
import {CurrencyConverterService} from '../currency-converter.service';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.scss']
})
export class ConverterFormComponent implements OnInit {

  currencies = [CurrencyType.EUR, CurrencyType.USD, CurrencyType.GBP,
    CurrencyType.BTC, CurrencyType.ETH, CurrencyType.FKE];
  precision = 2;
  model = {amount: 1 , from: CurrencyType.EUR, to: CurrencyType.USD};
  lastSubmittedModel = {amount: 1 , from: CurrencyType.EUR, to: CurrencyType.USD};
  result = 0;
  isLoading = false;
  showResult = false;

  constructor(private converterService: CurrencyConverterService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.isLoading = true;
    this.converterService.convert(this.model).subscribe(result => {
        this.isLoading = false;
        this.showResult = true;
        this.result = result;
        this.lastSubmittedModel = {...this.model};
      });
  }
}
