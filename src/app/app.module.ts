import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

import { TestService } from "./services/test/test.service";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuestionComponent } from './components/question/question.component';
import { ResultComponent } from './components/result/result.component';
import { ReviewComponent } from './components/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WelcomeComponent,
    QuestionComponent,
    ResultComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
  //bootstrap: [WelcomeComponent]
})
export class AppModule { }
