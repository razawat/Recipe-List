import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeDescriptionComponent } from './receipe-description.component';

describe('ReceipeDescriptionComponent', () => {
  let component: ReceipeDescriptionComponent;
  let fixture: ComponentFixture<ReceipeDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceipeDescriptionComponent]
    });
    fixture = TestBed.createComponent(ReceipeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
