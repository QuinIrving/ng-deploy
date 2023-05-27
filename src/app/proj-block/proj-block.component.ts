import { Component } from '@angular/core';

@Component({
  selector: 'app-proj-block',
  templateUrl: './proj-block.component.html',
  styleUrls: ['./proj-block.component.css']
})
export class ProjBlockComponent {
  tiles = [
    {text: 'One', cols: 1, rows: 1, colour: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, colour: 'purple'},
    {text: 'Three', cols: 1, rows: 1, colour: 'red'},
    {text: 'Four', cols: 1, rows: 1, colour: 'green'},
    {text: 'Five', cols: 1, rows: 1, colour: 'yellow'},
    {text: 'Six', cols: 1, rows: 1, colour: 'pink'}
  ];
  
  projectHover(tile: HTMLElement) {
    tile.classList.add("rectExpand");
    tile.firstElementChild?.classList.add("openTopWaffle");
    tile.firstElementChild?.classList.add("hideWaffleText");
    tile.firstElementChild?.nextElementSibling?.classList.add("bottomRectZIncrease");
  }

  projectExit(tile: HTMLDivElement) {
    tile.classList.remove("rectExpand");
    tile.firstElementChild?.classList.remove("openTopWaffle");
    tile.firstElementChild?.classList.remove("hideWaffleText");
    tile.firstElementChild?.nextElementSibling?.classList.remove("bottomRectZIncrease");
  }
}
