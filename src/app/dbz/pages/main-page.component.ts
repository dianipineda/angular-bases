import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
})

//la inyeccion de dependencias siempre debe de ser private , no public pues se expone la logica de negocio
export class MainPageComponent {
  constructor(private dbzService: DbzService){}

  get characters (): Character[] {
    return [...this.dbzService.characters]
  }
  //con el operador spread en este getter lo que quiero decir es que me estoy trayendo una data de todos los personajes, no modificare el arreglo directamente porque me estoy trayendo una copia

  onDeleteCharacter(id: string):void{
    this.dbzService.onDeleteCharacterById(id)
  }

  onNewCharacter(character: Character): void{
    this.dbzService.onNewCharacte(character)
  }
}
