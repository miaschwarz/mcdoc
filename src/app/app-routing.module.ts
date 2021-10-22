import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GoalComponent } from './goal/goal.component';
import { SketchesComponent } from './sketches/sketches.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { CritiquesComponent } from './critiques/critiques.component';
import { TechnologiesComponent } from './technologies/technologies.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'goal',
    component: GoalComponent
  },
  {
    path: 'sketches',
    component: SketchesComponent
  },
  {
    path: 'userstories',
    component: UserstoriesComponent
  },
  {
    path: 'critiques',
    component: CritiquesComponent
  },
  {
    path: 'technologies',
    component: TechnologiesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
