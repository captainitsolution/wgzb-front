import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  specialties: string[] = [
    'Cível',
    'Trabalhista',
    'Criminal',
    'Família'
  ];
  currentIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.specialties.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.specialties.length) % this.specialties.length;
    this.resetTimer();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetTimer();
  }

  resetTimer(): void {
    this.stopCarousel();
    this.startCarousel();
  }
}
