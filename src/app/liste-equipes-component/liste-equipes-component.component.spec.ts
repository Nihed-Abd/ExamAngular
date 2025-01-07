import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListeEquipesComponentComponent } from './liste-equipes-component.component';

describe('ListeEquipesComponentComponent', () => {
  let component: ListeEquipesComponentComponent;
  let fixture: ComponentFixture<ListeEquipesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ListeEquipesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEquipesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
