import { Component, OnInit, Input } from '@angular/core';
import { UpdatecategoryService } from 'src/app/services/updatecategory.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'updatecategory',
  templateUrl: './updatecategory.component.html',
  styles: []
})
export class UpdatecategoryComponent implements OnInit {

  @Input() var_one: any;
  private result: any
  constructor(private _service:UpdatecategoryService) { }

  ngOnInit() {
  }

  public update(obj:any):any
  {
   
    
    this._service.updateCategory(obj).subscribe((posRes)=>{
      if(posRes.status == 1)
      {
        for (let index = 0; index < this.var_one.length; index++) {
          if (this.var_one[index].id == obj.id) {
            console.log(this.var_one[index].id)
            
            this.var_one[index].id = obj.id
            this.var_one[index].name = obj.name
          }

          this.result = posRes
          
        }
      }
    },(err:HttpErrorResponse)=>{
      if (err.error instanceof Error) {
        console.log("Client Side Error");
        
        
      } else {
        console.log("Server Side Error");
        
      }
    })
  }

}
