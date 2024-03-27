import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveLecalComponent } from './archive-lecal.component';

describe('ArchiveLecalComponent', () => {
  let component: ArchiveLecalComponent;
  let fixture: ComponentFixture<ArchiveLecalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveLecalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveLecalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
