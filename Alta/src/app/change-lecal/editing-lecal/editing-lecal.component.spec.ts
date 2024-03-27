import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingLecalComponent } from './editing-lecal.component';

describe('EditingLecalComponent', () => {
  let component: EditingLecalComponent;
  let fixture: ComponentFixture<EditingLecalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingLecalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditingLecalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
