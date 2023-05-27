import { Component } from '@angular/core';
//import { MYICONS } from 'src/assets/data/myIcons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver } from '@angular/cdk/layout';
/*import { Icon } from "src/app/icon";*/


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  icons = 
  {
   'diploma':
     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z">
       </path><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z">
       </path>
     </svg>`,
 
   'githubBox': 
     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
       <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-5.15c-.35-.08-.35-.76-.35-1v-2.74c0-.93-.33-1.54-.69-1.85 2.23-.25 4.57-1.09 4.57-4.91 0-1.11-.38-2-1.03-2.71.1-.25.45-1.29-.1-2.64 0 0-.84-.27-2.75 1.02-.79-.22-1.65-.33-2.5-.33-.85 0-1.71.11-2.5.33-1.91-1.29-2.75-1.02-2.75-1.02-.55 1.35-.2 2.39-.1 2.64-.65.71-1.03 1.6-1.03 2.71 0 3.81 2.33 4.67 4.55 4.92-.28.25-.54.69-.63 1.34-.57.24-2.04.69-2.91-.83 0 0-.53-.96-1.53-1.03 0 0-.98-.02-.1.6 0 0 .68.31 1.14 1.47 0 0 .59 1.94 3.36 1.34V21c0 .24 0 .92-.36 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z">
       </path>
     </svg>`,
     
   'resume': 
     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
       <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z">
       </path>
     </svg>`,
 
   'linkedin': 
     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
       <path d="M19 19h-3v-5.3a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 0-1.5 1.5V19h-3v-9h3v1.2c.5-.84 1.59-1.4 2.5-1.4a3.5 3.5 0 0 1 3.5 3.5M6.5 8.31c-1 0-1.81-.81-1.81-1.81A1.81 1.81 0 0 1 6.5 4.69c1 0 1.81.81 1.81 1.81A1.81 1.81 0 0 1 6.5 8.31M8 19H5v-9h3m12-8H4c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4c0-1.11-.9-2-2-2z">
       </path>
     </svg>`,
 
   'email': 
     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
       <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z">
       </path>
     </svg>`,
 
   'phone': 
     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
       <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z">
       </path>
     </svg>`,
 
   'githubCircle': 
     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
       <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z">
       </path>
     </svg>`,
 
     'sidenav':
     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
       <path d="M2 15.5v2h20v-2H2z"></path><path d="M2 10.5v2h20v-2H2z"></path><path d="M2 5.5v2h20v-2H2z">
       </path>
     </svg>`,
 
     'home':
     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z">
       </path>
     </svg>`
 };
  //diplomaBox = MYICONS['diploma'];

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
  constructor(private breakpointObserver: BreakpointObserver, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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
