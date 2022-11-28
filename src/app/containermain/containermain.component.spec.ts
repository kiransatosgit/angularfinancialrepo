import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainermainComponent } from './containermain.component';

describe('ContainermainComponent', () => {
  let component: ContainermainComponent;
  let fixture: ComponentFixture<ContainermainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainermainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
