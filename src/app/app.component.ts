import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/service/api.service';



@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {

 title = 'ThinkTac';
 public productList : any ;

 searchkey: string="";
 constructor(private api : ApiService) {
   
 }

 ngOnInit():void{

  this.api.getProduct()
  .subscribe(res=>{
    this.productList = res;
  });
  this.api.search.subscribe((val:any)=>{
    this.searchkey = val;
  });
  

}
}