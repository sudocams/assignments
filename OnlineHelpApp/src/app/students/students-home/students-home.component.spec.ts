import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsHomeComponent } from './students-home.component';

describe('StudentsHomeComponent', () => {
  let component: StudentsHomeComponent;
  let fixture: ComponentFixture<StudentsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
