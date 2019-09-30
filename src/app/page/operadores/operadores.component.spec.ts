import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OperadoresComponent} from './operadores.component';

describe('OperadoresComponent', () => {
  let component: OperadoresComponent;
  let fixture: ComponentFixture<OperadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OperadoresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
