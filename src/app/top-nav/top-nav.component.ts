import { Component } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Icon } from '../icon';
import { IconDataService } from '../icon-data.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})



export class TopNavComponent {

  icons: Icon = {};

  iconHover(icon: HTMLAnchorElement) {
    icon.classList.add("fillIcon");
  }
  iconExit(icon: HTMLAnchorElement) {
    icon.classList.remove("fillIcon");
  }
  /*
  Using this.icons for now, because if I use a service and it makes sense and it loads
  it in nicely then I will keep this.icons and load the service with icons stuff.
  If not, then I can change this.icons to MYICONS and just use the const from the import
  as that would make it cleaner because it removes the redundancy of declaring a local
  variable to equal the const, and then just using it as is here anyways.
  */

  loadIcons():void {
    this.icons = this.iconService.loadIcons();
  }

  constructor(private iconService: IconDataService, private breakpointObserver: BreakpointObserver, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    
    this.icons = this.iconService.loadIcons();

    iconRegistry.addSvgIconLiteral('github-circle', sanitizer.bypassSecurityTrustHtml(this.icons['githubCircle']));
    iconRegistry.addSvgIconLiteral('github-box', sanitizer.bypassSecurityTrustHtml(this.icons['githubBox']));
    iconRegistry.addSvgIconLiteral('linkedin', sanitizer.bypassSecurityTrustHtml(this.icons['linkedin']));
    iconRegistry.addSvgIconLiteral('email', sanitizer.bypassSecurityTrustHtml(this.icons['email']));
    iconRegistry.addSvgIconLiteral('phone', sanitizer.bypassSecurityTrustHtml(this.icons['phone']));
    iconRegistry.addSvgIconLiteral('resume', sanitizer.bypassSecurityTrustHtml(this.icons['resume']));
    iconRegistry.addSvgIconLiteral('diploma', sanitizer.bypassSecurityTrustHtml(this.icons['diploma']));
    iconRegistry.addSvgIconLiteral('side-menu', sanitizer.bypassSecurityTrustHtml(this.icons['sidenav']));
    iconRegistry.addSvgIconLiteral('home', sanitizer.bypassSecurityTrustHtml(this.icons['home']));
    
   
  }



}
