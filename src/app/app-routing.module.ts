import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeEquipesComponentComponent } from './liste-equipes-component/liste-equipes-component.component';
import { ListeMatchsComponentComponent } from './liste-matchs-component/liste-matchs-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipes', component: ListeEquipesComponentComponent },
  { path: 'matchs', component: ListeMatchsComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}