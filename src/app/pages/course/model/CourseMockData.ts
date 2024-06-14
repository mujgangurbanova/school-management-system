import {ICourse} from "./ICourse";

export class CourseMockData {
  static mockList: ICourse[] = [

  ];

  public static getCourseList(): ICourse[] {
    return CourseMockData.mockList;
  }

  public static getById(id: string): ICourse {
    console.log(id)
    const data = CourseMockData.mockList.find(item => item.courseCode === id);
    return data ? data : {} as ICourse;
  }


  public static insert(course: ICourse): ICourse {
    CourseMockData.mockList.push(course);
    return course;
  }

  public static update(course: ICourse): ICourse {
    const findIndex = CourseMockData.mockList.findIndex(item => item.courseCode === course.courseCode);
    CourseMockData.mockList.splice(findIndex, 1, course);
    return course;
  }

  public static delete(courseCode: string) {
    const findIndex = CourseMockData.mockList.findIndex(item => item.courseCode === courseCode);
    if (findIndex > -1)
      CourseMockData.mockList.splice(findIndex, 1);
  }


}
