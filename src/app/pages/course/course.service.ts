import { Injectable } from '@angular/core';
import {BACKEND_URL} from "../../utils/constants";
import {HttpClientHelperService} from "../../shared/services/http-client-helper.service";
import {IFunctions} from "../../shared/models/IFunctions";
import {ICourse} from "./model/ICourse";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private COURSE_BASE_URL: string = BACKEND_URL + "/course"
  constructor(private httpClientHelperService: HttpClientHelperService) { }



  loadList( callback: IFunctions) {
    this.httpClientHelperService.get(this.COURSE_BASE_URL, callback);
  };


  public insert(course: ICourse, callback: IFunctions) {
    this.httpClientHelperService.post(this.COURSE_BASE_URL, course, callback);
  };

  public update(course: ICourse, callback: IFunctions) {
    this.httpClientHelperService.put(this.COURSE_BASE_URL, course, callback);
  };

  public delete(id: number, callback: IFunctions) {
    this.httpClientHelperService.delete(this.COURSE_BASE_URL + "/" + id, callback);
  };
}
