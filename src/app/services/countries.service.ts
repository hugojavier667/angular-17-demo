import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Observable } from 'rxjs';

export interface ICountry {
  name: { common: string, official: string };
  region: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<ICountry[]> {
    return this.httpClient.get<ICountry[]>('https://restcountries.com/v3.1/all');
  }
}
