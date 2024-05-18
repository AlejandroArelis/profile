import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SessionComponent } from './session/session.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule, SessionComponent, SearchComponent]
})
export class NavbarComponent {

}