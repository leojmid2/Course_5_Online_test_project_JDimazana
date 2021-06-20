import { Injectable } from '@angular/core';
import { ITest} from './../../interfaces/test';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAnswer } from 'src/app/interfaces/answer';
import { IUserAnswer } from 'src/app/interfaces/userAnswer';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  score: number = 0 ;

  userAnswer: IUserAnswer[] = [];

  constructor(private http: HttpClient) { }

  getTest(): Observable<ITest[]>{
    console.log("Fetching test api");
    return this.http.get<ITest[]>("http://localhost:3000/api/question");
  }


  getAnswer(): Observable<IAnswer[]>{
    console.log("Fetching Answer api");
    return this.http.get<IAnswer[]>("http://localhost:3000/api/answer");
  }


  getScore(): number{
    return this.score;
  }

  setScore(score: number){
    this.score = score;
  }

  getUserAnswer(): IUserAnswer[]{
    return this.userAnswer;
  }

 setUserAnswer(userAnswer: IUserAnswer[]){
   this.userAnswer = userAnswer;
 }
}
