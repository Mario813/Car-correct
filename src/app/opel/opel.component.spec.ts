import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpelComponent } from './opel.component';

describe('OpelComponent', () => {
  let component: OpelComponent;
  let fixture: ComponentFixture<OpelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpelComponent]
    });
    fixture = TestBed.createComponent(OpelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
