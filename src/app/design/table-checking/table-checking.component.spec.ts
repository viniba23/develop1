import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCheckingComponent } from './table-checking.component';

describe('TableCheckingComponent', () => {
  let component: TableCheckingComponent;
  let fixture: ComponentFixture<TableCheckingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCheckingComponent]
    });
    fixture = TestBed.createComponent(TableCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
