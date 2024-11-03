import { Component, HostListener, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fitclub-teste';

  constructor(private renderer: Renderer2) {}

  // Escuta o evento de rolagem da janela
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Define o ponto em que a animação deve ocorrer
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Adiciona a classe 'visible' quando a seção está visível na tela
      if (sectionTop < windowHeight - 100) {
        this.renderer.addClass(section, 'visible');
      } else {
        this.renderer.removeClass(section, 'visible');
      }
    });
  }
}
