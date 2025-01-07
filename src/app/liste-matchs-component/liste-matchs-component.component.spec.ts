import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMatchsComponentComponent } from './liste-matchs-component.component';

describe('ListeMatchsComponentComponent', () => {
  let component: ListeMatchsComponentComponent;
  let fixture: ComponentFixture<ListeMatchsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMatchsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMatchsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
