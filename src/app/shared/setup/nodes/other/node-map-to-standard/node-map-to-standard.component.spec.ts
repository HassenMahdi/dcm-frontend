import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeMapToStandardComponent } from './node-map-to-standard.component';

describe('NodeMapToStandardComponent', () => {
  let component: NodeMapToStandardComponent;
  let fixture: ComponentFixture<NodeMapToStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeMapToStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeMapToStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
