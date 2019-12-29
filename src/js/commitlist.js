import {Card} from './card';

export class CommitList {
  constructor(container) {
    this.container = container;
    this.container.innerHTML = "";
  }

  addCommit = (card) => {
    this.container.appendChild(card);
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
