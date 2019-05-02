import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletecategoryService {

  constructor(private _http: HttpClient) { }
  public deleteCategory(obj): Observable<any>
  {
    return this._http.delete("http://localhost:8080/category/"+obj.id)
  }
}
