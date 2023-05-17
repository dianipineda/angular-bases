import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;
  get capitalizeName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHero(): void {
    this.name = 'spiderman';
  }
  resetForm(): void {
    this.name = 'iroman';
    this.age = 45;
  }

  changeAge(): void {
    this.age = 19;
  }
}
