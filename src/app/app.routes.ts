import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signals',
    loadComponent: () => import('./components/signals-demo/signals-demo.component').then((m) => m.SignalsDemoComponent),
  },
  {
    path: 'signals-with-rxjs',
    loadComponent: () => import('./components/signals-with-rx-js-demo/signals-with-rx-js-demo.component').then((m) => m.SignalsWithRxJsDemoComponent),
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./components/control-flow-demo/control-flow-demo.component').then((m) => m.ControlFlowDemoComponent),
  },
  {
    path: 'deferred-views',
    loadComponent: () => import('./components/deferred-views-demo/deferred-views-demo.component').then((m) => m.DeferredViewsDemoComponent),
  },
  {
    path: 'standalone',
    loadComponent: () => import('./components/standalone-demo/standalone-demo.component').then((m) => m.StandaloneDemoComponent),
  },
];
