import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { TakeSurveyComponent } from './take-survey/take-survey.component';

const routes: Routes = [  {
  path: '',
  pathMatch:'full',
  component: LoginComponent,
  children: []
  },

  {
    path: 'dashboard',
    // pathMatch:'full',
    component: DashboardComponent,
    children: [
      // {path: 'create', component: CreateSurveyComponent }
    ]
  },

  {
    path: 'create',
    pathMatch:'full',
    component: CreateSurveyComponent,
    children: []
  },

  {
    path: 'delete',
    // pathMatch:'full',
    component: DashboardComponent,
    children: []
  },

  {
    path: 'poll',
    // pathMatch:'full',
    component: TakeSurveyComponent,
    children: []
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
