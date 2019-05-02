import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetcategoryService {

  constructor(private _http:HttpClient) { }

  public getCategories():Observable<any>
  {
    return this._http.get("http://localhost:8080/category");
  }
}
