import { Component, OnInit } from '@angular/core';
import {QuotesFromApiService} from '../quotes-from-api.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  list_quotes=[]
  
  searched:any;
  constructor(public quotesService:QuotesFromApiService) { 

    this.loadQuotes()
  }

  ngOnInit() {
    this.searched = this.list_quotes;
    
  }

  loadQuotes(ev?){
    this.quotesService.getQuotes().subscribe(q=>{
     this.list_quotes=q["results"];
     console.log(this.list_quotes);

     if(ev){
       ev.target.complete()
     }
   })
 }


  searchQuotes(event){
    const text= event.target.value;
    console.log("text :"+text);
    if(text && text.trim()!=''){
      this.quotesService.searchQuotes(text).subscribe(q=>{
        this.list_quotes=q["results"];
        console.log(this.list_quotes);
   
        if(event){
          event.target.complete()
        }
      })
    }
    // this.skip=this.skip +10;
    // if(this.skip==2000){
    //   ev.target.disabled=true
    // }
    // this.page=this.page +1;
    // if(this.page==2000){
    //   ev.target.disabled=true
    // }
  }
}
