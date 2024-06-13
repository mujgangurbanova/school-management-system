import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {IStudent} from "../model/IStudent";
import {StudentMockData} from "../model/StudentMockData";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id?: number;
  title?: string;
  student: IStudent = {
    studId: 0,
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
    this.id = idParam !== null ? +idParam : 0;
    this.title = this.id === 0 ? 'Əlavə et' : 'Dəyişdir';
    if (this.id !== 0) {
      this.student = StudentMockData.getById(this.id)

    }

  }


  onSubmit(form: NgForm) {

    let student: IStudent = {
      studId: form.value.studId,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      class: form.value.class,


    }
    if (this.id === 0) {
      StudentMockData.insert(student)

    } else {
      StudentMockData.update(student)
    }
    this.router.navigateByUrl('/student')
  }
}
