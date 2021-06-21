import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test/test.service';
import { ITest } from 'src/app/interfaces/test';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private testService: TestService) { }

  test: ITest | undefined;

  tests: ITest[] = [];
  questionNo: number = 0 ;

  ngOnInit(): void {

    this.testService.getTest().subscribe(
      (tests: ITest[])=> this.tests = tests
    );

  }

  onClick(){
    //link here router
    this.questionNo++;
    console.log("next question" + this.questionNo);

  }

}
