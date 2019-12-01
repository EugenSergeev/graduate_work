import {dates} from './dates';

export class Card {
  constructor(cardObject, container) {
    this.container = container;
    this.title = cardObject.title;
    this.date = dates.cardsFormat(Date.parse(cardObject.publishedAt));
    this.text = cardObject.description;
    this.source = cardObject.source.name;
    this.link = cardObject.url;
    this.image = cardObject.urlToImage;
    this.element = null;
  }

  render = () => {
    this.element = this.createCard();
    this.container.appendChild(this.element);
  }

  createCard() {
    const templateCard = `<div class="content__item">
                            <img class="content__image" src="${this.image}" alt="${this.title}">
                            <div class="content__date">${this.date}</div>
                            <h4 class="content__item-title">${this.title}</h4>
                            <p class="content__text">${this.text}</p>
                            <a target="_blank" href="${this.link}" class="content__item-link">${this.source}</a>
                          </div>`;
    var tempElement = document.createElement("div");
    tempElement.insertAdjacentHTML('beforeend', templateCard.trim());
    return tempElement.firstChild;
}
}
