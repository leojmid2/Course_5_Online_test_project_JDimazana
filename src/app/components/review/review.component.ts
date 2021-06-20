import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test/test.service';
import { IUserAnswer } from 'src/app/interfaces/userAnswer';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private testService: TestService) { }

  userAnswers: IUserAnswer[] = [];

  ngOnInit(): void {
    this.userAnswers = [...this.testService.getUserAnswer()];
  }

}
