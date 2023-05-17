import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = ['spiderman', 'thor', 'wonder woman'];
  public heroeEliminado?: string = '';
  borrarUltimoHeroe(): void {
    this.heroeEliminado = this.heroNames.pop();
  }
}
