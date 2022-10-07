import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBooksIssuedComponent } from './all-books-issued.component';

describe('AllBooksIssuedComponent', () => {
  let component: AllBooksIssuedComponent;
  let fixture: ComponentFixture<AllBooksIssuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBooksIssuedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBooksIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
