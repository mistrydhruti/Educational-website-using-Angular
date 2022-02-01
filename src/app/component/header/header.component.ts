import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang: string | undefined;

  public searchTerm !: string;
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(lang: any){
    console.log(lang);
    localStorage.setItem('lang',lang);
    window.location.reload();
  }
  search(event:any){
    this.searchTerm =(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.apiService.search.next(this.searchTerm)
  }
  

}
