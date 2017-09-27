import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

import { SurveyData } from './survey-data';

@Injectable()
export class SurveyService {

  userLogin: string = "";
  
  surveys: SurveyData[] = [];
  surveyObserver = new BehaviorSubject(this.surveys);

  singleSurvey: SurveyData;
  singleSurveyObserver = new BehaviorSubject(this.singleSurvey);
  
  survey_id:string  = "";

    constructor(private _http: Http) { 

    // this.userLogin = localStorage.getItem('user');
    // if(!this.userLogin) {
    //   this.loginUser();
    // }

  }

  setUser(user_name) {
    this.userLogin = user_name;
  }

  getUser() {
    return this.userLogin;
  }

  logoutUser() {
    this.userLogin = "";
  }

  setSurveyId(survey_id) {
    this.survey_id = survey_id;
    console.log(`setSurveyId this.setSurveyId: ${this.survey_id}`);
  }
  
  getSurveyId():string {
    return this.survey_id;
  }

  addSurvey(survey: SurveyData) {
    this._http.post(`/surveys`, survey).subscribe((response) => {
      // this.players = response.json();
      // console.log(this.players);
      console.log(response.json());
      this.getSurveys();
    },
    (err) => {
      console.log(`error`);
    });
  }

  getSurveys() {
    console.log(`Services getSurveys()`);
    this._http.get(`/surveys`)
      .subscribe((response) => {
        this.surveys = response.json();
        this.surveyObserver.next(this.surveys);
      },
      (err) => {
        console.log(`error`);
      }
      );

      return;
    }

    deleteSurvey(_id: number) {
      console.log(`deleteSurvey() ${_id}`);
      this._http.delete(`/surveys/${_id}`).subscribe((response) => {
          this.getSurveys();
        },
        (err) => {
          console.log(`error`);
        }
        );
  
        return;
    }

    getSurveyById(surveyID) {
      console.log(`getSurveyById() ${surveyID}`);
      this._http.get(`/surveys/${surveyID}`).subscribe((response) => {
        this.singleSurvey = response.json();
        console.log(this.singleSurvey);
        this.singleSurveyObserver.next(this.singleSurvey);
        },
        (err) => {
          console.log(`error`);
        }
        );

        return;
    }

}
