import {Component, OnInit} from '@angular/core';
import {IStudent} from "../../student/model/IStudent";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentMockData} from "../../student/model/StudentMockData";
import {NgForm} from "@angular/forms";
import {IExam} from "../model/IExam";
import {ExamMockData} from "../model/ExamMockData";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class ExamEditComponent implements OnInit {
  id?: number;
  title?: string;
  successMessage:string='';
  exam: IExam = {
    studId: 0,
    courseCode: '',
    tarix: new Date(),
    grade: 0
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam !== null ? +idParam : 0;
    this.title = this.id === 0 ? 'Əlavə et' : 'Dəyişdir';
    if (this.id !== 0) {
      this.exam = ExamMockData.getById(this.id)

    }

  }


  onSubmit(form: NgForm) {
this.successMessage=''
    let exam: IExam = {
      studId: form.value.studId,
      courseCode: form.value.courseCode,
      tarix: form.value.tarix,
      grade: form.value.grade,


    }
    if (this.id === 0) {
      ExamMockData.insert(exam)
      this.successMessage = 'Məlumat Əlavə edildi';

    } else {
      ExamMockData.update(exam)
      this.successMessage = 'Məlumat yeniləndi';
    }

    setTimeout(()=>{
      this.router.navigateByUrl('/exam')

    },1000)
  }
}
