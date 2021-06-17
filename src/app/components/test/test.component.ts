import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test/test.service';
import { ITest } from 'src/app/interfaces/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //tests: Array<ITest> | undefined;

  tests: ITest[] = [];
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    /*this.testService.getTest().subscribe(
      tests => {this.tests = tests; console.log("test inside" , tests) }
    );*/

    this.testService.getTest().subscribe(
      (tests: ITest[])=> this.tests = tests
    );


    //console.log("test data ", this.tests);
  }

}
