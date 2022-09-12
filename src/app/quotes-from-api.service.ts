import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators"
const API= environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class QuotesFromApiService {

  constructor(private http:HttpClient) {
   }

   getQuotes(){
    return this.http.get(API+"/quotes");}
    
    
   searchQuotes(text){
    return  this.http.get(API+"/search/quotes?query="+text);
    
  }
   
  generateRandomQuote(){
    return  this.http.get(API+"/random");
    
  }
  //  }
  //  getQuotes(page){
  //   return this.http.get(API+"/quotes/?page="+page);
    
  //  }

   }