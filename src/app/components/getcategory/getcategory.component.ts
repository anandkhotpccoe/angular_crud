import { Component, OnInit } from '@angular/core';
import { GetcategoryService } from 'src/app/services/getcategory.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'getcategory',
  templateUrl: './getcategory.component.html',
  styleUrls: []
})
export class GetcategoryComponent implements OnInit {
  public records: any
  constructor(private _getCategoryService:GetcategoryService) { }

  ngOnInit() {
    this.getCateogryList();
  }

  getCateogryList(){
    this._getCategoryService.getCategories().subscribe((posRes)=>{
      this.records = posRes.body
      console.log(posRes);
      
    },(err:HttpErrorResponse)=>{

      if(err.error instanceof Error)
      {
        console.log("Client Side Error");
        
      }
      else
      {
        console.log("Server Side Error");
        
      }

    })
  }

}
