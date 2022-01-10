import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[new Quote("ANC","Julius Malema","Mama give us a sign"),
new Quote("Imman","Black Panther","Wakanda Forever")]
  preNum!:number
  lastNum!:number
  counter!:number

  addQuote(emittedQuote: any){
    this.quotes.push(emittedQuote)
  }

  upvote(i: any){
      this.quotes[i].upvotes+=1
  }
  downvote(i: any){
    this.quotes[i].downvotes+=1
  }
  delQuote(i: any){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}
