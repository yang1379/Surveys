import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SurveyService } from '../survey.service';
import { SurveyData } from "../survey-data";

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  surveyDataInst = new SurveyData();

  user_name:string = "";
  
  constructor(private _router: Router,
              private _surveyService: SurveyService) { }

  ngOnInit() {
    this.user_name = this._surveyService.getUser();
    if (!this.user_name) {
      this._router.navigateByUrl(``);
    }
  }

  cancel() {
    this._router.navigateByUrl(`dashboard`);
  }

  createPoll() {
    this.surveyDataInst.creator = this._surveyService.getUser();
    this._surveyService.addSurvey(this.surveyDataInst);
    this._router.navigateByUrl(`dashboard`);
  }

}
