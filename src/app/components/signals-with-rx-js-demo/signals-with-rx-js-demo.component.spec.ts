import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsWithRxJsDemoComponent } from './signals-with-rx-js-demo.component';

describe('SignalsWithRxJsDemoComponent', () => {
  let component: SignalsWithRxJsDemoComponent;
  let fixture: ComponentFixture<SignalsWithRxJsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsWithRxJsDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsWithRxJsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
