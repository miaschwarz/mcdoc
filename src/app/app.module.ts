import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoalComponent } from './goal/goal.component';
import { SketchesComponent } from './sketches/sketches.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { CritiquesComponent } from './critiques/critiques.component';
import { TechnologiesComponent } from './technologies/technologies.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    GoalComponent,
    SketchesComponent,
    UserstoriesComponent,
    CritiquesComponent,
    TechnologiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
