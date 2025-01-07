import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavBarComponentComponent, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
