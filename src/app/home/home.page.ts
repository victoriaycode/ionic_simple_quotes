import { Component, OnInit } from '@angular/core';
import {QuotesFromApiService} from '../quotes-from-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  quote={};
  

  constructor(public quotesService:QuotesFromApiService) {
    this.generateQuote();
   }

  ngOnInit() {
  }

  generateQuote(){
    this.quotesService.generateRandomQuote().subscribe(q=>{
      this.quote=q;
      console.log(this.quote);
 
     
    })

  }
  generateOtherQuote(){
    this.generateQuote();
    // if(event){
      
    //   event.target.complete()
    // }
  }
}
