import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudviajeComponent } from './crudviaje.component';

describe('CrudviajeComponent', () => {
  let component: CrudviajeComponent;
  let fixture: ComponentFixture<CrudviajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudviajeComponent]
    });
    fixture = TestBed.createComponent(CrudviajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
