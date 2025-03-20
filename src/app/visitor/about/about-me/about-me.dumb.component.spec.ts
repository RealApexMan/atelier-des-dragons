import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeDumbComponent } from './about-me.dumb.component';

describe('AboutMeDumbComponent', () => {
  let component: AboutMeDumbComponent;
  let fixture: ComponentFixture<AboutMeDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
