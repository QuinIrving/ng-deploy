import { Component } from '@angular/core';
import { SKILLS } from 'src/assets/data/skills';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.css']
})



export class SkillsBlockComponent {

  skills = SKILLS;

  spaceLines(or: number): string {
    const newSpacing = 76 + ( (or - 1) * 3.3);
    return `top: ${-newSpacing}%`;
  }
}
