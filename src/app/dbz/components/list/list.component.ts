import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public listCharacter: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ];

  @Output()
  public onDeleteIdCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string) {
    // TODO: Emitir el ID del personaje
    this.onDeleteIdCharacter.emit(id);
  }
}
