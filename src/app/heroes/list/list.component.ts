import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Espaiderman','Jaironman','SuperLopez','She-Hulk','Thor'];
  public deletedHero?: string // esto es igual a public deleteHero: string = '';

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();

  }

}
