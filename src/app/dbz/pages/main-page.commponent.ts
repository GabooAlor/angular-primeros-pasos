import { Component } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import { DbzService } from "../services/dbz.service";

@Component({
  selector: 'app-main-dbz',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  constructor(private dbzService: DbzService){}

  onNewCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }

  onDeleteCharacter(id: string) {
    this.dbzService.deleteCharacterById(id);
  }

}
