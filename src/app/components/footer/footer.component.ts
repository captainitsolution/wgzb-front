import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  // Seu componente já é standalone, o que é uma ótima prática!
  // Não precisei adicionar nada em 'imports' para esta alteração.
  imports: [NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // Adiciona uma propriedade para armazenar o ano atual.
  currentYear: number = new Date().getFullYear();
}
