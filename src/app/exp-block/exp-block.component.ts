import { Component, ViewEncapsulation } from '@angular/core';
import { PANELS } from 'src/assets/data/panels';

@Component({
  selector: 'app-exp-block',
  templateUrl: './exp-block.component.html',
  styleUrls: ['./exp-block.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExpBlockComponent {
  
  panels = PANELS;

  panelClicked(panel: HTMLDivElement) {
    panel.firstElementChild?.classList.toggle("crackHeader");
    panel.firstElementChild?.classList.toggle("fixHeader");

    panel.firstElementChild?.firstElementChild?.classList.toggle("crackLeft");
    panel.firstElementChild?.lastElementChild?.classList.toggle("crackRight");
    
    panel.lastElementChild?.classList.toggle("showPanel");
    panel.lastElementChild?.classList.toggle("hidePanel");
  }
}
