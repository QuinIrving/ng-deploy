import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { IntroBlockComponent } from './intro-block/intro-block.component';
import { AboutBlockComponent } from './about-block/about-block.component';
import { SkillsBlockComponent } from './skills-block/skills-block.component';
import { ExpBlockComponent } from './exp-block/exp-block.component';
import { ProjBlockComponent } from './proj-block/proj-block.component';
import { ContactBlockComponent } from './contact-block/contact-block.component';
import { ResumeComponent } from './resume/resume.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IconDataService } from './icon-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    SideNavComponent,
    IntroBlockComponent,
    AboutBlockComponent,
    SkillsBlockComponent,
    ExpBlockComponent,
    ProjBlockComponent,
    ContactBlockComponent,
    ResumeComponent,
    DiplomaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatSidenavModule,
    PdfViewerModule
  ],
  providers: [IconDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
