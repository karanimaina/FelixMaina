import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFormComponent } from './home-form.component';

describe('AboutMeFormComponent', () => {
  let component: HomeFormComponent;
  let fixture: ComponentFixture<HomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
