import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTestComponent } from './pagina-test.component';

describe('PaginaTestComponent', () => {
  let component: PaginaTestComponent;
  let fixture: ComponentFixture<PaginaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
