import { Component, OnInit, Inject, inject, Input } from '@angular/core';
import { PostcategoryService } from 'src/app/services/postcategory.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'postcategory',
  templateUrl: './postcategory.component.html',
  styles: []
})
export class PostcategoryComponent implements OnInit {
  /**
   * --@Input is a decorater which is used to bind property to component
   */
  @Input() var_one
  private result:any
  constructor(private _service:PostcategoryService) { }

  ngOnInit() {
  }


  public post(obj:any):any
  {
    
    this._service.addCategory(obj).subscribe((posRes)=>{
      if (posRes.status == 1) {
        this.var_one.push(obj);
        
      }
      this.result = posRes
    },(err:HttpErrorResponse)=>{
      if (err.error instanceof Error) {
        console.log("Client Side Error");
        
        
      } else {
        console.log("Server Side Error");
        
      }
    })
  }

}
