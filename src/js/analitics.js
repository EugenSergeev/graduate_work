import { dates } from './dates';

class Analitics {
  constructor() {
    this.request = localStorage.request;
    this.answer = JSON.parse(localStorage.answer);
    this.dateTo = new Date(Date.parse(localStorage.date));
    console.log(this.dateTo);
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
    this.countsOfSheets();
  }

  countsOfSheets = () => {
    for (let i = 0; i<7 ; i++) {
      this.addText(this.datesOfSheets[i], dates.analiticsFormat(Date.parse(this.datesAndCounts[i][0])));
      this.addText(this.counts[i], this.datesAndCounts[i][1]);
      this.counts[i].setAttribute("style",`width:${this.datesAndCounts[i][1]}%`)
    }
  }

  //datesOfAnswer = () => new Set(this.answer.articles.map((current) => current.publishedAt.substr(0,10)));

  countOfDays = () => {
    const map = new Map();
    for (let i = 0; i < 7; i++) {
      map.set(dates.newsApiFormat(dates.daysAgo(this.dateTo,i)),this.answer.articles.reduce((count,current) => {
        if (current.publishedAt.indexOf(dates.newsApiFormat(dates.daysAgo(this.dateTo,i)))+1) {
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
    const newtext = document.createTextNode(text);
    block.appendChild(newtext);
  }
}

const runPage = new Analitics();
