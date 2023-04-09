import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.css']
})
export class QuoteGeneratorComponent implements OnInit {
  quotes: any[] = [];
  currentQuote: any = {};

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes;
      this.generateQuote();
    });
  }

  generateQuote() {
    this.currentQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
