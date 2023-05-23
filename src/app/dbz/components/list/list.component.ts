import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input('listPersonajes')
  public characterList: Character[] = [{ id: uuid(), name: 'Trunk', power: 10 }];

  @Output()
  public onDeleteIndex: EventEmitter<string> = new EventEmitter();

  onDelete(id:string): void{
    if(!id) return
    console.log(id);

    this.onDeleteIndex.emit(id)
  }

  onDeleteCharacter(index:number): void{
    //todo emitir el id del personaje
    console.log(index);

  }
}


