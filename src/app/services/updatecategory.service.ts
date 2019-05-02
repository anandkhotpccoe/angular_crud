import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatecategoryService {

  constructor(private _http: HttpClient) { }

  public updateCategory(obj): Observable<any>
  {
    return this._http.put("http://localhost:8080/category",obj)
  }
}
