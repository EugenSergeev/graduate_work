import {Card} from './card';
import { l,search } from './script';

export class CardList {
  constructor(container, resJson) {
    this.container = container;
    this.cardsArray = resJson.articles;
    this.totalCards = resJson.articles.length;
    this.enableCards = 0;
    this.refresh();
    this.container.innerHTML = "";
  }

  refresh = () => {
    this.enableCards = 0;
  }

  showThreeCards = () => {
    let j = 0;
    for (let i = this.enableCards; i<this.enableCards+3 && i<this.totalCards; i++) {
      const card = new Card(this.cardsArray[i],this.container);
      card.render();
      j++;
    }
    this.enableCards += j;
    this.areOtherCards();
  }

  areOtherCards() {
    if ((this.totalCards-this.enableCards)>0) {
      search.showMoreButton();
    } else {
      search.hideMoreButton();
    }
  }
}
