import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public search = new BehaviorSubject<string>("");

  constructor(private http : HttpClient) { }

  getProduct(){
   
    return this.http.get<any>("https://gist.githubusercontent.com/manzooralam/4b6aca6e1aa794c57c0cb6e7a2605109/raw/694828a0b1084ef63ff507ed85de3db6e3931e99/list.json")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
