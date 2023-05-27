import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
    constructor(private breakpointObserver: BreakpointObserver){}

    openMenu(sc: HTMLDivElement) {
      sc.classList.add("hideIcon");
      sc.parentElement?.classList.add("showMenu");
      sc.nextElementSibling?.classList.add("showMenu");
    }

    closeMenu(sc: HTMLDivElement) {
      sc.classList.remove("hideIcon");
      sc.parentElement?.classList.remove("showMenu");
      sc.nextElementSibling?.classList.remove("showMenu");
    }

}
