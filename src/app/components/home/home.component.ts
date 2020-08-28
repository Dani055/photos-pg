import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientId = '366c60c2bacabe3';
  clientSecret = '6d4d947c9e7b54dba5c26c1d9a1b5e55904a40e0';
  albumHash = 'xAmFVtT';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Client-ID ' + this.clientId,
      'Content-Type': 'application/json'
    })
  };
  photos;

  constructor(private http: HttpClient){}
  
  ngOnInit(){
    this.http.get('https://api.imgur.com/3/album/' + this.albumHash + '/images', this.httpOptions).subscribe((res) => {
      console.log(res)
      let photos_eval = res['data'];
      for(let img of photos_eval){
        console.log(img);
        if(img.width > img.height){
          img.ar = 'landscape';
        }
      }
      this.photos = photos_eval;
    })
  }
}
