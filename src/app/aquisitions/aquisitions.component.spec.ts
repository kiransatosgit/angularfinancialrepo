import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquisitionsComponent } from './aquisitions.component';

describe('AquisitionsComponent', () => {
  let component: AquisitionsComponent;
  let fixture: ComponentFixture<AquisitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquisitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
