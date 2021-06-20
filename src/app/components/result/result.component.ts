import { Component, OnInit, Input } from '@angular/core';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private testService: TestService) { }

  score: number = 0;

  ngOnInit(): void {
    this.score = this.testService.getScore();
  }

}
