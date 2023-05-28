import { Component } from '@angular/core';
import { BRIEFCASES } from 'src/assets/data/briefcases';

@Component({
  selector: 'app-proj-block',
  templateUrl: './proj-block.component.html',
  styleUrls: ['./proj-block.component.css']
})
export class ProjBlockComponent {
  
  tiles = BRIEFCASES;
  
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
