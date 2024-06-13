import {IStudent} from "./IStudent";

export class StudentMockData {
  static mockList: IStudent[] = [
    {
      studId:1,
      firstName:'Mujgan',
      lastName:'Qurbanova',
      class:11
    }
  ];

  public static getStudList(): IStudent[] {
    return StudentMockData.mockList;
  }

  public static getById(id: number): IStudent {
    const data = StudentMockData.mockList.find(item => item.studId === id);
    return data ? data : {} as IStudent;
  }


  public static insert(stud: IStudent): IStudent {
    StudentMockData.mockList.push(stud);
    return stud;
  }


  public static update(stud: IStudent): IStudent {
    const findIndex = StudentMockData.mockList.findIndex(item => item.studId === stud.studId);
    StudentMockData.mockList.splice(findIndex, 1, stud);
    return stud;
  }

  public static delete(studId: number) {
    const findIndex = StudentMockData.mockList.findIndex(item => item.studId === studId);
    if (findIndex > -1)
      StudentMockData.mockList.splice(findIndex, 1);
  }


}
