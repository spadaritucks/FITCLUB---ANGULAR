import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen: boolean = false; // Estado para controlar a abertura do menu

    toggleNavbar() {
        this.isOpen = !this.isOpen; // Alterna o estado
    }
}
