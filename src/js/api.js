import {dates} from './dates';

export class Api {
  constructor() {
    this.apiKey = 'e5eaab959f5c432780b91b754fa7cab6';
    this.url = 'https://newsapi.org/v2/';
  }

  newsApiRequest = (request, dateFrom, dateTo, endPoints = 'everything') => {
    let tempString;
    if (endPoints=='everything') {
      tempString = `${this.url}${endPoints}?q=${request}&excludeDomains=lifehacker.ru&apiKey=${this.apiKey}&from=${dates.newsApiFormat(dateFrom)}&to=${dates.newsApiFormat(dateTo)}&pageSize=100`;
    } else {
      tempString = `${this.url}${endPoints}?q=${request}&apiKey=${this.apiKey}&pageSize=100`;
    }
    return fetch(tempString)
      .then(res => this.checkRes(res))
      .catch(err => this.alertError(err))
  }

  alertError(err) {
    alert(`Ошибка: ${err.status} - ${err.statusText}.\nВозможно есть проблемы с соединением`);
  }

  checkRes(res) {
    if (res.ok) return res.json();
    return Promise.reject(res);
  }
}
/*
https://newsapi.org/v2/everything?q=bitcoin&apiKey=e5eaab959f5c432780b91b754fa7cab6
https://newsapi.org/v2/top-headlines?country=us&apiKey=e5eaab959f5c432780b91b754fa7cab6

https://newsapi.org/v2/top-headlines?q=trump&apiKey=e5eaab959f5c432780b91b754fa7cab6
https://newsapi.org/v2/top-headlines?q=Свадьба&apiKey=e5eaab959f5c432780b91b754fa7cab6&pageSize=100
https://newsapi.org/v2/top-headlines?q=Свадьба&excludeDomains=lifehacker.ru&apiKey=e5eaab959f5c432780b91b754fa7cab6&from=2019-11-24&to=2019-12-01&pageSize=100
*/
