import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjBlockComponent } from './proj-block.component';

describe('ProjBlockComponent', () => {
  let component: ProjBlockComponent;
  let fixture: ComponentFixture<ProjBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
