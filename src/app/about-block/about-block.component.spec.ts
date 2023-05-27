import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBlockComponent } from './about-block.component';

describe('AboutBlockComponent', () => {
  let component: AboutBlockComponent;
  let fixture: ComponentFixture<AboutBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
