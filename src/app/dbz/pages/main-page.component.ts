import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Krilim', power: 1000 },
    { name: 'Goku', power: 9500 },
  ];
  onNewCharacte(character: Character): void {
    console.log('main page');
    console.log(character);
  }
}
