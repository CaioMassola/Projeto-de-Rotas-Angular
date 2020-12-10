import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursonotFoundComponent } from './cursonot-found.component';

describe('CursonotFoundComponent', () => {
  let component: CursonotFoundComponent;
  let fixture: ComponentFixture<CursonotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursonotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursonotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
