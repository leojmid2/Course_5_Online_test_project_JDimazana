import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test/test.service';
import { ITest } from 'src/app/interfaces/test';
import { IAnswer } from 'src/app/interfaces/answer';
import { Router} from "@angular/router";
import { IUserAnswer } from 'src/app/interfaces/userAnswer';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //tests: Array<ITest> | undefined;

  tests: ITest[] = [];

  answers: IAnswer[] = [];

  //userAnswers: Array<string> = [];

  userAnswers: IUserAnswer[] = [{

  }];

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit(): void {
    /*this.testService.getTest().subscribe(
      tests => {this.tests = tests; console.log("test inside" , tests) }
    );*/

    this.testService.getTest().subscribe(
      (tests: ITest[])=> this.tests = tests
    );


    this.testService.getAnswer().subscribe(
      (answers: IAnswer[])=> this.answers = answers
    );
  }

  onSelect(selectEvent: any){
    this.userAnswers[selectEvent.name-1].userSelection = selectEvent.id;
    this.userAnswers[selectEvent.name-1].userAnswerDetails = selectEvent.value;
    console.log('user answer in question', selectEvent.id  );
  }

  onClick(){
    console.log("get test result");
    //use to navigate to different URL
    //test only - remove the navigate after testing
    //this.router.navigate(['/result']);
    if (this.userAnswers.length === 1)
    {
      console.log(this.userAnswers.length);
      this.computeResult();
      //this.mapUserAnswer();
      this.router.navigate(['/result']);
    }
    else
    {
      alert("You have a missing answer. Please review your answers");
    }


  }


/*
 question: string;
  userSelection: string;
  userAnswerDetails: string;
  answerSelection: string;
  answerDetails: string

*/

  computeResult(): void {
    let result: number = 0;
    for (let i=0; i<this.userAnswers.length; i++){
      this.userAnswers[i].question = this.tests[i].question;
      this.userAnswers[i].answerDetails = this.answers[i].answer;
      this.userAnswers[i].answerSelection = this.answers[i].option;
      //console.log ("answers " + this.answers[i].option +  " user answer " + this.userAnswers[i].userAnswerDetails);
      if (this.answers[i].option === this.userAnswers[i].userSelection){
        result++;
      }
    }
    this.testService.setScore(result);
    this.testService.setUserAnswer(this.userAnswers);
    console.log("compute " + result);
  }

}
