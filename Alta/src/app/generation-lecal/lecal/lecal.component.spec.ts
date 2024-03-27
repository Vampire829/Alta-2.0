import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecalComponent } from './lecal.component';

describe('LecalComponent', () => {
  let component: LecalComponent;
  let fixture: ComponentFixture<LecalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
