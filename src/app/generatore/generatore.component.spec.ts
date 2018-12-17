import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratoreComponent } from './generatore.component';

describe('GeneratoreComponent', () => {
  let component: GeneratoreComponent;
  let fixture: ComponentFixture<GeneratoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
