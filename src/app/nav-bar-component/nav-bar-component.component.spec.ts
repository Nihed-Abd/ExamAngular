import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponentComponent } from './nav-bar-component.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

describe('NavBarComponentComponent', () => {
  let component: NavBarComponentComponent;
  let fixture: ComponentFixture<NavBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterModule, NavBarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
