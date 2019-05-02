import { Component, OnInit, Input } from '@angular/core';
import { DeletecategoryService } from 'src/app/services/deletecategory.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'deletecategory',
  templateUrl: './deletecategory.component.html',
  styles: []
})
export class DeletecategoryComponent implements OnInit {

  @Input() var_one;
  private result:any
  constructor(private _service:DeletecategoryService) { }

  ngOnInit() {

  }

  public remove(obj:any):any
  {
    this._service.deleteCategory(obj).subscribe((posRes)=>{
        if(posRes.status == 1)
        {
           for (let index = 0; index < this.var_one.length; index++) {
             this.var_one.indexOf(obj.id)
             this.var_one.splice(index,1)
             
           }

           this.result = posRes
        }
    },
    (err:HttpErrorResponse)=>{
      if (err.error instanceof Error) {
        console.log("Client Side Error");
        
        
      } else {
        console.log("Server Side Error");
        
      }
    })

  }

}
