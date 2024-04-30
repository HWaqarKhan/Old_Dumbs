import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDFComponent } from './rdf.component';

describe('RDFComponent', () => {
  let component: RDFComponent;
  let fixture: ComponentFixture<RDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
