import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [RouterModule],
  styleUrl: './signals-demo.component.scss',
  template: `
    <div class="d-flex flex-column">
      <span>Value a: {{ valueA() }}</span>
      <span>Value b: {{ valueB() }}</span>
      <span>Computed value: {{ computedValue() }}</span>

      <button class="btn btn-primary" (click)="incrementFirstValue()">
        Increment first value
      </button>
    </div>
  `,
})
export class SignalsDemoComponent {
  public valueA: WritableSignal<number> = signal(2);
  public valueB: WritableSignal<number> = signal(10);

  public computedValue: Signal<number> = computed(
    () => this.valueA() * this.valueB()
  );

  constructor() {
    effect(() => {
      console.log(`The new computed value is: ${this.computedValue()}`);
    });
  }

  public incrementFirstValue(): void {
    this.valueA.set(this.valueA() + 1);

    // Use update to update signal based on current value
    // this.valueA.update((value: number): number => value + 1);
  }
}
