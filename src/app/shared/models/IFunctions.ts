export interface IFunctions {
  processingCallback(b: boolean): void;

  errorCallback(message: any): void;

  successCallback(response: any): void;
}
