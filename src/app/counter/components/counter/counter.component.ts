import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increseBy(1)">+1</button>
    <button (click)="counter = 10">Reset</button>
    <button (click)="increseBy(-1)">-1</button>
  `,
})
export class CounterComponent {

  public title: string = 'Hola mundo!!!';
  public counter: number = 10;

  constructor(){}

  public increseBy(value: number): void {
    this.counter += value;
  }

}
