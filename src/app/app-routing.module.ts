import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ResultComponent } from './components/result/result.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  //{ path:'',component: WelcomeComponent },
  { path: '', redirectTo:'welcome', pathMatch: 'full' },
  { path:'welcome',component: WelcomeComponent },
  { path:'test',component: TestComponent },
  { path:'result',component: ResultComponent },
  { path:'review',component: ReviewComponent },
  { path:'question',component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
