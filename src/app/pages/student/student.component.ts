import {Component, OnInit} from '@angular/core';
import {IStudent} from "./model/IStudent";
import {StudentMockData} from "./model/StudentMockData";

@Component({

  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: IStudent[] = [];


  constructor() {}

  ngOnInit(): void {

    this.loadStudents();
    console.log(this.students)
  }

  loadStudents(): void {
    this.students = StudentMockData.getStudList();
  }

  deleteStudent(studId: number): void {
    StudentMockData.delete(studId);
    this.loadStudents();
  }


}
