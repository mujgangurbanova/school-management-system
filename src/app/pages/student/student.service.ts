import { Injectable } from '@angular/core';
import {BACKEND_URL} from "../../utils/constants";
import {HttpClientHelperService} from "../../shared/services/http-client-helper.service";
import {IFunctions} from "../../shared/models/IFunctions";
import {IStudent} from "./model/IStudent";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //backend olsa idi
  private STUDENT_BASE_URL: string = BACKEND_URL + "/student"
  constructor(private httpClientHelperService: HttpClientHelperService) { }

  loadList( callback: IFunctions) {
    this.httpClientHelperService.get(this.STUDENT_BASE_URL, callback);
  };


  public insert(student: IStudent, callback: IFunctions) {
    this.httpClientHelperService.post(this.STUDENT_BASE_URL, student, callback);
  };

  public update(student: IStudent, callback: IFunctions) {
    this.httpClientHelperService.put(this.STUDENT_BASE_URL, student, callback);
  };

  public delete(id: number, callback: IFunctions) {
    this.httpClientHelperService.delete(this.STUDENT_BASE_URL + "/" + id, callback);
  };


}
