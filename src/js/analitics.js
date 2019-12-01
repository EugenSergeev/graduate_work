const l = (text) => console.log(text);

import { dates } from './dates';

class Analitics {
  constructor() {
    this.request = sessionStorage.request;
    this.answer = JSON.parse(sessionStorage.answer);
    this.title = document.querySelector('.analitics-header__request');
    this.totalNews = document.querySelector('.analitics-header__totalNews');
    this.topHeadlines = document.querySelector('.analitics-header__topHeadlines');
    this.datesOfSheets = document.querySelectorAll('.analitic-table__date');
    this.counts = document.querySelectorAll('.analitic-table__diagram-value');
    this.datesAndCounts = this.countOfDays();
    this.addText(this.title,this.request);
    this.showAnalitics()
  }

  showAnalitics = () => {
    this.addText(this.totalNews,this.answer.articles.length);
    this.addText(this.topHeadlines,this.countHeadlines());
    l(this.datesAndCounts);
    this.countsOfSheets();
  }

  countsOfSheets = () => {
    for (let i = 0; i<7 ; i++) {
      this.addText(this.datesOfSheets[i],dates.analiticsFormat(this.datesAndCounts[i][0]));
    }
  }

  datesOfAnswer = () => new Set(this.answer.articles.map((current) => current.publishedAt.substr(0,10)));

  countOfDays = () => {
    const map = new Map();
    for (let value of this.datesOfAnswer()) {
      map.set(value,this.answer.articles.reduce((count,current) => {
        if (current.publishedAt.indexOf(value)+1) {
          return ++count;
        }
        return count;
      },0))
    };
    return [...map.entries()].sort();
  }

  countHeadlines = () => this.answer.articles.reduce((count,current) => {
        if  (current.title.indexOf(this.request)+1) return ++count;
        return count;
    },0);




  addText(block,text) {
    var newtext = document.createTextNode(text);
    block.appendChild(newtext);
  }
}

const a = new Analitics();
