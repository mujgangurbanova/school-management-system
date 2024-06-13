import {IExam} from "./IExam";

export class ExamMockData{
  static mockList: IExam[] = [

  ];

  public static getExamList(): IExam[] {
    return ExamMockData.mockList;
  }

  public static getById(id: number): IExam {
    const data = ExamMockData.mockList.find(item => item.studId === id);
    return data ? data : {} as IExam;
  }


  public static insert(exam: IExam): IExam {
    ExamMockData.mockList.push(exam);
    return exam;
  }


  public static update(exam: IExam): IExam {
    const findIndex = ExamMockData.mockList.findIndex(item => item.studId === exam.studId);
    ExamMockData.mockList.splice(findIndex, 1, exam);
    return exam;
  }

  public static delete(studId: number) {
    const findIndex = ExamMockData.mockList.findIndex(item => item.studId === studId);
    if (findIndex > -1)
      ExamMockData.mockList.splice(findIndex, 1);
  }
}
