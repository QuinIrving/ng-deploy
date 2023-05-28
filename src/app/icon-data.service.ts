import { Injectable } from '@angular/core';
import { Icon } from './icon';
import { ICONS } from 'src/assets/data/icons';

@Injectable({
  providedIn: 'root'
})
export class IconDataService {

  constructor() { }

  loadIcons(): Icon { return ICONS; }
}
