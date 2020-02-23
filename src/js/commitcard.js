import {dates} from './dates';

export class CommitCard {
  constructor(commit) {
    this.avatarUrl = commit.author.avatar_url;
    this.author = commit.commit.author.name;
    this.date = dates.cardsFormat(Date.parse(commit.commit.author.date));
    this.text = commit.commit.message;
    this.link = commit.html_url;
    this.email = commit.commit.author.email;
    this.element = null;
  }

  createCard = () => {
    const templateCard = `<div class="swiper-slide">
                            <a href="${this.link}" class="glide__item">
                              <p class="glide__item-date">${this.date}</p>
                              <img src="${this.avatarUrl}" alt="аватар" class="glide__item-img">
                              <h4 class="glide__item-name">${this.author}</h4>
                              <p class="glide__item-email">${this.email}</p>
                              <p class="glide__item-text">${this.text}</p>
                            </a>
                          </div>`;
    const tempElement = document.createElement("div");
    tempElement.insertAdjacentHTML('beforeend', templateCard.trim());
    this.element = tempElement.firstChild;
    return this.element;
}
}
