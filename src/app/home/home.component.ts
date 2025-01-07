import { Component } from '@angular/core';
import { NavBarComponentComponent } from '../nav-bar-component/nav-bar-component.component';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponentComponent, FooterComponentComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
