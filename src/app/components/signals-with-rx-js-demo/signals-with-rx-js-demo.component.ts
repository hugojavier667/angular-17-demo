import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CountriesService, ICountry } from '../../services/countries.service';
import { Observable, of, switchMap, take } from 'rxjs';

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

  public search$: Observable<string>;

  constructor(private countriesService: CountriesService) {
    this.countries = toSignal(countriesService.getAll(), { initialValue: [] });

    this.filteredCountries = computed(() => {
      return this.countries().filter((country: ICountry): boolean => !this.search() || !!country.name.common.match(this.search()))
    })

    this.search$ = toObservable(this.search);
    
    this.search$.subscribe((serachTerm: string): void => {
      console.log('Search term changed: ', serachTerm);
    })
  }

  public filterByName(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
  }

  /**
   * An example of a method that needs to read an obervable to execute some other logic
   */
  public someMethod(): void {
    this.search$.pipe(
      take(1),
      switchMap((search: string) => {
        // do something else like calling an API
        return of();
      })
    ).subscribe();
  }

  /**
   * An example of a method that needs to read a signal to execute some other logic
   */
  public someOtherMethod(): void {
    const searchValue: string = this.search();

    // do something
  }
}
