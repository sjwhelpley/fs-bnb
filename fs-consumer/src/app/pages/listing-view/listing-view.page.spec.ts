import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingViewPage } from './listing-view.page';

describe('ListingViewPage', () => {
  let component: ListingViewPage;
  let fixture: ComponentFixture<ListingViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
