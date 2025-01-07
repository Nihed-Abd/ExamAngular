import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';

export class Score {
  equipeA!: number;
  equipeB!: number;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScoreRoutingModule
  ]
})
export class ScoreModule { }
