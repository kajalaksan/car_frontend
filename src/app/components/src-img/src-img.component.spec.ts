import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcImgComponent } from './src-img.component';

describe('SrcImgComponent', () => {
  let component: SrcImgComponent;
  let fixture: ComponentFixture<SrcImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SrcImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrcImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
