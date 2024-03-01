import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CountriesService, ICountry } from '../../services/countries.service';

@Component({
  selector: 'app-signals-with-rx-js-demo',
  standalone: true,
  imports: [],
  templateUrl: './signals-with-rx-js-demo.component.html',
  styleUrl: './signals-with-rx-js-demo.component.scss'
})
export class SignalsWithRxJsDemoComponent {
  public countries: Signal<ICountry[]>;
  public search: WritableSignal<string> = signal('');
  public filteredCountries: Signal<ICountry[]>;

  constructor(private countriesService: CountriesService) {
    this.countries = toSignal(countriesService.getAll(), { initialValue: [] });

    this.filteredCountries = computed(() => {
      return this.countries().filter((country: ICountry): boolean => !this.search() || !!country.name.common.match(this.search()))
    })

    toObservable(this.search).subscribe((serachTerm: string): void => {
      console.log('Search term changed: ', serachTerm);
    })
  }

  public filterByName(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
  }
}
