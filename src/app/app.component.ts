
import { Component, OnInit } from '@angular/core';
import { CardService } from './card/card.service';
import { ICard } from './card/card.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ CardService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works indeed 2!';
  cards: ICard[] = null;
  selectedValue = '';

  constructor(private cardService: CardService) { }
  ngOnInit(): void {
    this.cardService.getCards().then(cards => this.cards = cards);
  }
}
