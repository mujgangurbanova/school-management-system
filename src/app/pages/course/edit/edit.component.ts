import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ICourse} from "../model/ICourse";
import {CourseMockData} from "../model/CourseMockData";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class CourseEditComponent implements OnInit {
  id?: string;
  title?: string;
  errorMessage: string = '';
  course: ICourse = {
    courseCode: '',
    courseName: '',
    firstName: '',
    lastName: '',
    class: 1
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam !== null ? idParam : '0';
    this.title = this.id === '0' ? 'Əlavə et' : 'Dəyişdir';
    if (this.id !== '0') {
      this.course = CourseMockData.getById(this.id)

    }

  }


  onSubmit(form: NgForm) {

    let course: ICourse = {
      courseCode: form.value.courseCode,
      courseName: form.value.courseName,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      class: form.value.class,


    }
    if (this.id === '0') {
      CourseMockData.insert(course)

    } else {
      CourseMockData.update(course)
    }
    this.router.navigateByUrl('/course')
  }
}
