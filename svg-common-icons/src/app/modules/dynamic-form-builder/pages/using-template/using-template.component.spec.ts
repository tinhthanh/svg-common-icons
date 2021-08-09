import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingTemplateComponent } from './using-template.component';

describe('UsingTemplateComponent', () => {
  let component: UsingTemplateComponent;
  let fixture: ComponentFixture<UsingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
