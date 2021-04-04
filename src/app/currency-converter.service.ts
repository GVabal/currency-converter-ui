import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CurrencyType} from './converter-form/CurrencyType';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

const apiUrl = `${environment.baseUrl}/currency-converter`;

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor(private http: HttpClient) { }

  convert(request: { amount: number; from: CurrencyType; to: CurrencyType }): Observable<number> {
    return this.http.get<number>(`${apiUrl}/convert?amount=${request.amount}&from=${request.from}&to=${request.to}`);
  }
}
