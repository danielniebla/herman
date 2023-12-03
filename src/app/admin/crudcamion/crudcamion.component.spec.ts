import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcamionComponent } from './crudcamion.component';

describe('CrudcamionComponent', () => {
  let component: CrudcamionComponent;
  let fixture: ComponentFixture<CrudcamionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudcamionComponent]
    });
    fixture = TestBed.createComponent(CrudcamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
