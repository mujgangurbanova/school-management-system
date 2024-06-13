import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CourseComponent } from './pages/course/course.component';
import { ExamComponent } from './pages/exam/exam.component';
import { StudentComponent } from './pages/student/student.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./shared/components/header/header.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {FormsModule} from "@angular/forms";
import {EditComponent} from "./pages/student/edit/edit.component";
import {CourseEditComponent} from "./pages/course/edit/edit.component";
import {ExamEditComponent} from "./pages/exam/edit/edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CourseComponent,
    ExamComponent,
    StudentComponent,
    EditComponent,
    CourseEditComponent,
    ExamEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
