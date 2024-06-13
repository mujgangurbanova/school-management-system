import {RouterModule, Routes} from "@angular/router";
import {CourseComponent} from "./pages/course/course.component";
import {ExamComponent} from "./pages/exam/exam.component";
import {StudentComponent} from "./pages/student/student.component";
import {NgModule} from "@angular/core";
import {EditComponent} from "./pages/student/edit/edit.component";
import {CourseEditComponent} from "./pages/course/edit/edit.component";
import {ExamEditComponent} from "./pages/exam/edit/edit.component";

const routes: Routes = [
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  {path: 'course', component: CourseComponent},
  {path: 'exam', component: ExamComponent},
  {path: 'student', component: StudentComponent},
  {path: 'student/edit/:id', component: EditComponent},
  {path: 'student/add/:id', component: EditComponent},
  {path: 'course/edit/:id', component: CourseEditComponent},
  {path: 'course/add/:id', component: CourseEditComponent},
  {path: 'exam/edit/:id', component: ExamEditComponent},
  {path: 'exam/add/:id', component: ExamEditComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
