import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow-demo.component.html',
  styleUrl: './control-flow-demo.component.scss'
})
export class ControlFlowDemoComponent {
  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  public isAuthenticated: boolean = false;

  public color: 'red' | 'blue' | 'green' | null = null;

  public trackByFn(index: number, item: string): string {
    return item;
  }
}
