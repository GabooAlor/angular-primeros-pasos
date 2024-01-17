import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','IronMan','Hulk','She hulk','Thor'];
  public deletedHero?: string = "";

  public removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();

  }
}