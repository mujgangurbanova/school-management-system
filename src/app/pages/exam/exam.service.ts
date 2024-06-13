import { Injectable } from '@angular/core';
import {BACKEND_URL} from "../../utils/constants";
import {HttpClientHelperService} from "../../shared/services/http-client-helper.service";
import {IFunctions} from "../../shared/models/IFunctions";
import {IExam} from "./model/IExam";

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private EXAM_BASE_URL: string = BACKEND_URL + "/exam"
  constructor(private httpClientHelperService: HttpClientHelperService) { }


  loadList( callback: IFunctions) {
    this.httpClientHelperService.get(this.EXAM_BASE_URL, callback);
  };


  public insert(exam: IExam, callback: IFunctions) {
    this.httpClientHelperService.post(this.EXAM_BASE_URL, exam, callback);
  };

  public update(exam: IExam, callback: IFunctions) {
    this.httpClientHelperService.put(this.EXAM_BASE_URL, exam, callback);
  };

  public delete(id: number, callback: IFunctions) {
    this.httpClientHelperService.delete(this.EXAM_BASE_URL + "/" + id, callback);
  };
}
