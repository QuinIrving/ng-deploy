import { Component } from '@angular/core';

export interface Language {
  name: string;
  type: string;
  side: string;
  first: boolean;
  order: number;
}

export interface Skill {
  type: string;
  leftSkill: string;
  rightSkill: string;
}


@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.css']
})



export class SkillsBlockComponent {

  skills: Skill[] = [
    {type: 'Software', leftSkill: 'C', rightSkill: 'C#'},
    {type: 'Software', leftSkill: 'ADO', rightSkill: 'C++'},
    {type: 'Software', leftSkill: 'WPF', rightSkill: 'UWP'},
    {type: 'Software', leftSkill: 'Java', rightSkill: 'Python'},
    {type: 'Software', leftSkill: '.NET Core', rightSkill: 'Assembly'},

    {type: 'Web', leftSkill: 'SQL', rightSkill: 'CSS'},
    {type: 'Web', leftSkill: 'PHP', rightSkill: 'HTML'},
    {type: 'Web', leftSkill: 'REST', rightSkill: 'React'},
    {type: 'Web', leftSkill: 'Spring', rightSkill: 'Angular'},
    {type: 'Web', leftSkill: 'MongoDB', rightSkill: 'JavaScript'},
  ];

  languages: Language[] = [
    {name: 'C', type: 'Software', side: 'left', first: true, order: 1},
    {name: 'C#', type: 'Software', side: 'right', first: true, order: 1},
    {name: 'ADO', type: 'Software', side: 'left', first: false, order: 2},
    {name: 'C++', type: 'Software', side: 'right', first: false, order: 2},
    {name: 'WPF', type: 'Software', side: 'left', first: false, order: 3},
    {name: 'UWP', type: 'Software', side: 'right', first: false, order: 3},
    {name: 'Java', type: 'Software', side: 'left', first: false, order: 4},
    {name: 'Python', type: 'Software', side: 'right', first: false, order: 4},
    {name: '.NET Core', type: 'Software', side: 'left', first: false, order: 5},
    {name: 'Assembly', type: 'Software', side: 'right', first: false, order: 5},



    {name: 'SQL', type: 'Web', side: 'left', first: true, order: 1},
    {name: 'PHP', type: 'Web', side: 'left', first: false, order: 2},
    {name: 'REST', type: 'Web', side: 'left', first: false, order: 3},
    {name: 'Spring', type: 'Web', side: 'left', first: false, order: 4},
    {name: 'MongoDB', type: 'Web', side: 'left', first: false, order: 5},
    
    {name: 'CSS', type: 'Web', side: 'right', first: true, order: 1},
    {name: 'HTML', type: 'Web', side: 'right', first: false, order: 2},
    {name: 'React', type: 'Web', side: 'right', first: false, order: 3},
    {name: 'Angular', type: 'Web', side: 'right', first: false, order: 4},
    {name: 'JavaScript', type: 'Web', side: 'right', first: false, order: 5}
  ];

  spaceLines(or: number): string {
    const newSpacing = 76 + ( (or - 1) * 3.3);
    return `top: ${-newSpacing}%`;
  }
}
