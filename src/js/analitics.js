import { Api } from "./api";
import { dates } from './dates';
const l = (text) => console.log(text);

class Analitics {
  constructor() {
    this.request = sessionStorage.getItem('request');
    this.dateTo = new Date(Date.parse(sessionStorage.getItem('dateTo')));
    this.dateFrom = new Date(Date.parse(sessionStorage.getItem('dateFrom')));
    this.title = document.querySelector('.analitics-header__request');
    this.newsApi = new Api();
    this.addTextTitle(this.request);
  }

  newsTotal = (dateTo, dateFrom) => {
    let totalNews, topHeadlines;
    this.newsApi.newsApiRequest(this.request, dateTo, dateFrom).then(resJson => {
      totalNews = resJson.totalResults;
      this.newsApi.newsApiRequest(this.request, dateTo, dateFrom, 'top-headlines').then(resJson => {
        topHeadlines = resJson.totalResults;
          return [totalNews, topHeadlines];
      });
    });
  }

  newWeek = () => {

  }
  newsDay = () => {

  }




  addTextTitle(text) {
    var newtext = document.createTextNode(text);
    this.title.appendChild(newtext);
  }


}

const a = new Analitics();
