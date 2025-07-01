import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattressDetailComponent } from './mattress-detail.component';

describe('MattressDetailComponent', () => {
  let component: MattressDetailComponent;
  let fixture: ComponentFixture<MattressDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MattressDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
