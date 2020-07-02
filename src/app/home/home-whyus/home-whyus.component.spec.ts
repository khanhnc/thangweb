import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhyusComponent } from './home-whyus.component';

describe('HomeWhyusComponent', () => {
  let component: HomeWhyusComponent;
  let fixture: ComponentFixture<HomeWhyusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWhyusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhyusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
