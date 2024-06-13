import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IFunctions} from "../models/IFunctions";




@Injectable({
  providedIn: 'root'
})
export class HttpClientHelperService {

  public headers = new HttpHeaders()
    .set('Content-type', 'application/json; charset=UTF-8')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Credentials', 'True')
    .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    .set('Access-Control-Allow-Origin', '*')


  constructor(private httpClient: HttpClient) {
  }

  public post(url: string, body: any, callback: IFunctions) {
    callback.processingCallback(true);
    this.httpClient.post<any>(url, body, {
      headers: this.headers
    }).subscribe({
      next: response => {
        callback.successCallback(response);
      },
      error: err => {
        callback.processingCallback(false);
        callback.errorCallback(err?.error?.detail ? err?.error?.detail: err.message);
      },
      complete: () => {
        callback.processingCallback(false);
      }
    });
  }

  public put(url: string, body: any, callback: IFunctions) {
    callback.processingCallback(true);
    this.httpClient.put<any>(url, body, {
      headers: this.headers
    }).subscribe({
      next: response => {
        callback.successCallback(response);
      },
      error: err => {
        callback.errorCallback(err?.error?.detail ? err?.error?.detail: err.message);
        callback.processingCallback(false);
      },
      complete: () => {
        callback.processingCallback(false);
      }
    });
  }

  public get(url: string, callback: IFunctions) {
    callback.processingCallback(true);
    this.httpClient.get<any>(url, {
      headers: this.headers
    }).subscribe({
      next: response => {
        callback.successCallback(response);
      },
      error: err => {
        callback.errorCallback(err?.error?.detail ? err?.error?.detail: err.message);
        callback.processingCallback(false);
      },
      complete: () => {
        callback.processingCallback(false);
      }
    });
  }

  public delete(url: string, callback: IFunctions) {
    callback.processingCallback(true);
    this.httpClient.delete<any>(url, {
      headers: this.headers
    }).subscribe({
      next: response => {
        callback.successCallback(response);
      },
      error: err => {
        callback.errorCallback(err?.error?.detail ? err?.error?.detail: err.message);
        callback.processingCallback(false);
      },
      complete: () => {
        callback.processingCallback(false);
      }
    });
  }







}
