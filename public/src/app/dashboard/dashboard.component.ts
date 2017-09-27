import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SurveyService } from '../survey.service';
import { SurveyData } from '../survey-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  surveyDataInst: SurveyData[] = [];  

  user_name: string = "";

  constructor(private _router: Router,
              private _surveyService: SurveyService) { 

  }

  ngOnInit() {
    this.user_name = this._surveyService.getUser();
    if (!this.user_name) {
      this._router.navigateByUrl(``);
    }

    this._surveyService.surveyObserver.subscribe(
      (surveyData)=>{
        console.log(`surveyDataInst: ${surveyData}`);
        this.surveyDataInst = surveyData;
    });

    this._surveyService.getSurveys();
  }
 
  createPoll() {
    this._router.navigateByUrl(`create`);
  }

  delete(survey_id) {
    console.log("dashboard delete");
    this._surveyService.deleteSurvey(survey_id);
  }

  logout() {
    this._surveyService.setUser("");
    this._router.navigateByUrl(``);
  }

  takeSurvey(survey_id) {
    console.log(`survey id: ${survey_id}`);
    this._surveyService.setSurveyId(survey_id);
    this._router.navigateByUrl(`poll`);
  }
}
