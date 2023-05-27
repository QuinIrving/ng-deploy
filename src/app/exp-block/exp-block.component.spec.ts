import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpBlockComponent } from './exp-block.component';

describe('ExpBlockComponent', () => {
  let component: ExpBlockComponent;
  let fixture: ComponentFixture<ExpBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
