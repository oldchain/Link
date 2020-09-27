import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = `./assets/newsapi.json`;


@Injectable({
  providedIn: 'root'
})
export class NewsService {
    
  constructor(private http: HttpClient) {};

   all(){
    return this.http.get(BASE_URL);
   }
}