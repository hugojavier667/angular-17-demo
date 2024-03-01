import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredViewsDemoComponent } from './deferred-views-demo.component';

describe('DeferredViewsDemoComponent', () => {
  let component: DeferredViewsDemoComponent;
  let fixture: ComponentFixture<DeferredViewsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredViewsDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferredViewsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
