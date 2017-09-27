import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_name: string = "";

  constructor(private _router: Router,
              private _surveyService: SurveyService) { }

  ngOnInit() {
  }

  login() {
    console.log(`user name: ${this.user_name}`);
    this._surveyService.setUser(this.user_name);
    this._router.navigateByUrl(`dashboard`);
  }
}
