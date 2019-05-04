import { Component, OnInit, Input } from '@angular/core';
import { DeletecategoryService } from 'src/app/services/deletecategory.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GetcategoryService } from 'src/app/services/getcategory.service';
import { GetcategoryComponent } from '../getcategory/getcategory.component';

@Component({
  selector: 'deletecategory',
  templateUrl: './deletecategory.component.html',
  styles: []
})
export class DeletecategoryComponent implements OnInit {

  @Input() var_one;
  private result:any
  constructor(private _service:DeletecategoryService, private _getService:GetcategoryService, private getCategoryComp: GetcategoryComponent) { }

  ngOnInit() {

  }

  public remove(obj:any):any
  {
    this._service.deleteCategory(obj).subscribe((posRes)=>{
        if(posRes.status == 1)
        {
          //  for (let index = 0; index < this.var_one.length; index++) {
          //    this.var_one.indexOf(obj.id)
          //    this.var_one.splice(index,1)
             
          //  }
          // this._getService.getCategories().subscribe((res)=>{
            
          //   this.result = res.body
            
            
          // })
          this.getCategoryComp.getCateogryList();
           
           //this.result = this.result.body

          // this.var_one.filter(obj=>obj.id == this.var_one.id );
          // this.result = posRes
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
