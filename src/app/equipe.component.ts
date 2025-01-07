import { Component, OnInit } from '@angular/core';
import { EquipeService } from './equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipes: any[] = [];

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.equipeService.getEquipes().subscribe(data => {
      this.equipes = data.equipes;
    });
  }
}
