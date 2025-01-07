import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';
import { Equipe } from '../equipe/equipe.module';

@Component({
  selector: 'app-liste-equipes-component',
  templateUrl: './liste-equipes-component.component.html',
  styleUrls: ['./liste-equipes-component.component.css']
})
export class ListeEquipesComponentComponent implements OnInit {
  equipes: Equipe[] = [];

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.equipeService.getEquipes().subscribe(data => {
      this.equipes = data.equipes;
    });
  }
}