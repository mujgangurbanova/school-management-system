import {Component, OnInit} from '@angular/core';
import {IExam} from "./model/IExam";
import {ExamMockData} from "./model/ExamMockData";

@Component({
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css','../student/student.component.css']
})
export class ExamComponent implements OnInit{
  exams: IExam[] = [];


  constructor() {}

  ngOnInit(): void {

    this.loadExams();
  }

  loadExams(): void {
    this.exams = ExamMockData.getExamList();
  }

  deleteStudent(studId: number): void {
    ExamMockData.delete(studId);
    this.loadExams();
  }
}
