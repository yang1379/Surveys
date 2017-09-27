import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SurveyService } from '../survey.service';
import { SurveyData } from '../survey-data';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {

  user_name: string = "";

  survey_id:string = "";

  singleSurvey: SurveyData;

  constructor(private _router: Router,
              private _surveyService: SurveyService) { }

  ngOnInit() {
    this.user_name = this._surveyService.getUser();
    if (!this.user_name) {
      this._router.navigateByUrl(``);
    }

    this.survey_id = this._surveyService.getSurveyId();

    this._surveyService.singleSurveyObserver.subscribe(
      (singleSurvey)=>{
        console.log(`singleSurvey: ${singleSurvey}`);
        this.singleSurvey = singleSurvey;
    });

    console.log(`this.survey_id ${this.survey_id}`);
    this._surveyService.getSurveyById(this.survey_id);
  }

  goToPolls() {
    this._router.navigateByUrl(`dashboard`);
  }

  voteOne() {
    this.singleSurvey.count_one += 1;
  }

  voteTwo() {
    this.singleSurvey.count_two += 1;
  }

  voteThree() {
    this.singleSurvey.count_three += 1;
  }

  voteFour() {
    this.singleSurvey.count_four += 1;
  }
}
