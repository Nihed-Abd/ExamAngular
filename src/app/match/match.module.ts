import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { Equipe } from '../equipe/equipe.module';
import { Score } from '../score/score.module';
import { MatchComponentComponent } from '../match-component/match-component.component';

export class Match {
  id!: string;
  date!: string;
  heure!: string;
  lieu!: string;
  equipeA: Equipe = new Equipe();
  equipeB: Equipe = new Equipe();
  score: Score = new Score();
}

@NgModule({
  declarations: [
    MatchComponentComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule
  ]
})
export class MatchModule { }
