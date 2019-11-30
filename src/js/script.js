export const l = (text) => console.log(text);
import { Api } from './api';
import { CardList } from './cardlist';

export class Search {
  constructor() {
    this.string = document.querySelector('.search__input');
    this.button = document.querySelector('.search__button');
    this.form = document.querySelector('.search__wrap');
    this.preloader = document.querySelector('.preloader');
    this.noresult = document.querySelector('.answer-noresult');
    this.content = document.querySelector('.content');
    this.moreCardButton = document.querySelector('.content__button');
    this.cardList = null;
    this.newsApi = new Api();
    this.addListeners();
    this.returnLastRequest();

  }

  addListeners() {
    this.string.addEventListener('input', this.validateInput);
    this.form.addEventListener('submit', this.submitForm);
  }

  hideBlock(block) {
    block.classList.add('disable');
  }

  showBlock(block) {
    block.classList.remove('disable');
  }

  returnLastRequest() {                                     //Возвращает в поисковую строку последний запрос
    if (sessionStorage.getItem('request') == null) {        //
      if(sessionStorage.getItem('request')!=null) {
        this.string.placeholder = localStorage.getItem('request');
      }
    } else {
      this.string.value = sessionStorage.getItem('request');
      this.sendRequest();
    }
  }


  validateInput = (event) => {
    const string = event.target;
    string.value = string.value.trim();                     // пробелы в начале и конце
    if (!string.value.match(/^[\wА-я]*$/g)) {               //в строке только буквы или цифры
      string.style.color = "red";
      this.button.setAttribute('disabled', true);
      this.button.classList.add('search__button_inactive');
    } else {
      string.style.color = "#1A1B22";
      this.button.removeAttribute('disabled');
      this.button.classList.remove('search__button_inactive');
    }
  }

  saveStorage = () => {
    localStorage.setItem('request', this.string.value);
    sessionStorage.setItem('request', this.string.value);
  }

  submitForm =(event) => {
    event.preventDefault();
    this.moreCardButton.removeEventListener('click',this.cardList.showThreeCards);
    delete this.cardList;
    this.sendRequest();
  }

  sendRequest = () => {
    this.hideBlock(this.noresult);
    l(`hide noresult`);
    this.hideBlock(this.content);
    l(`hide content`);
    this.showBlock(this.preloader);
    l(`show preloader`);
    this.saveStorage();

    const dateNow = new Date();
    const dateTo = dateNow;
    const dateFrom = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() - 7);

    this.newsApi.newsApiRequest(this.string.value, dateFrom.toUTCString(), dateTo.toUTCString()).then(resJson => {
      this.hideBlock(this.preloader);
      l(`hide preloader`);
      if (resJson.articles.length) {
        this.cardList = new CardList(document.querySelector('.content__container'),resJson);
        this.cardList.showThreeCards();
        this.showBlock(this.content);
        this.moreCardButton.addEventListener('click',this.cardList.showThreeCards);
        l(`show content`);
      } else {
        this.showBlock(this.noresult);
        l(`show noresult`);
      }
    });

  }

  showMoreButton = () => {
    this.showBlock(this.moreCardButton);
    l(`show morebutton`);
  }

  hideMoreButton = () => {
    this.hideBlock(this.moreCardButton);
    l(`hide morebutton`);
  }

};

export const s = new Search();
