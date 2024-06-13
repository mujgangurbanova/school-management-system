import {Component, OnInit} from '@angular/core';
import {ICourse} from "./model/ICourse";
import {CourseMockData} from "./model/CourseMockData";

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css','../student/student.component.css']
})
export class CourseComponent implements  OnInit{

  courses: ICourse[] = [];


  constructor() {}

  ngOnInit(): void {

    this.loadCourses();
  }

  loadCourses(): void {
    this.courses = CourseMockData.getCourseList();
  }

  deleteCourse(courseCode: string): void {
    CourseMockData.delete(courseCode);
    this.loadCourses();
  }


}
