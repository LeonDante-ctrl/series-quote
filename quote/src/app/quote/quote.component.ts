import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[new Quote("CCP","the trial of oz","let us all know"),
new Quote("peacey","Beetlejuice","Joker returns")]
  preNum!:number
  lastNum!:number
  counter!:number

  addQuote(emittedQuote: any){
    this.quotes.push(emittedQuote)
  }

  upvote(i: number){
      this.quotes[i].upvotes+=1
  }
  downvote(i: number){
    this.quotes[i].downvotes+=1
  }
  delQuote(i: number){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}