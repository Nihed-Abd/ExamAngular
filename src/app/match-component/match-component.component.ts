import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './match-component.component.html',
  styleUrls: ['./match-component.component.css']
})
export class MatchComponentComponent {
  matchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.matchForm = this.fb.group({
      date: ['', Validators.required],
      heure: ['', Validators.required],
      lieu: ['', Validators.required],
      equipeA: ['', Validators.required],
      equipeB: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.matchForm.valid) {
      // Handle form submission
    }
  }
}