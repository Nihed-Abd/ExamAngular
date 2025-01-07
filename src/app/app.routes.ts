import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeEquipesComponentComponent } from './liste-equipes-component/liste-equipes-component.component';
import { MatchComponentComponent } from './match-component/match-component.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipes', component: ListeEquipesComponentComponent },
  { path: 'ajouter-match', component: MatchComponentComponent }
];