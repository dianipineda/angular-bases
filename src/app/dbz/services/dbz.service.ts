import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'


@Injectable({
  providedIn: 'root'
})

export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krilim', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
  ];

  //uso de desestructuración con operador spread
  onNewCharacte(character: Character): void {

    this.characters.push(character)
  }
  // onDeleteCharacte(index: number){
  //   this.characters.splice(index, 1)
  // }

  onDeleteCharacterById(id: string){
    this.characters = this.characters.filter(character=>
      character.id !== id
    )
  }

}
//En los service debe ir la logica del negocio, aca pase las propiedades y metodos, que usare en los componentes que necesite llamando al servicio mediante la inyeccion de independencias
