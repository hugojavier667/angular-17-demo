import { Component } from '@angular/core';
import { StandaloneDemoComponent } from '../standalone-demo/standalone-demo.component';
import { SignalsDemoComponent } from '../signals-demo/signals-demo.component';

@Component({
  selector: 'app-deferred-views-demo',
  standalone: true,
  imports: [StandaloneDemoComponent, SignalsDemoComponent],
  templateUrl: './deferred-views-demo.component.html',
  styleUrl: './deferred-views-demo.component.scss'
})
export class DeferredViewsDemoComponent {

}
