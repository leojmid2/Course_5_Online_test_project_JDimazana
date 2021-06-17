import { Injectable } from '@angular/core';
import { ITest} from './../../interfaces/test';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor(private http: HttpClient) { }

  getTest(): Observable<ITest[]>{
    console.log("data api");
    return this.http.get<ITest[]>("http://localhost:3000/api/question");
  }
}
