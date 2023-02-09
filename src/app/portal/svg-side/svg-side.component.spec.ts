import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSideComponent } from './svg-side.component';

describe('SvgSideComponent', () => {
  let component: SvgSideComponent;
  let fixture: ComponentFixture<SvgSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
