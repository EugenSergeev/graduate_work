import { dates } from './dates';

export class Api {
  constructor() {
    this.apiKey = 'e5eaab959f5c432780b91b754fa7cab6';
    this.urlNews = 'https://newsapi.org/v2/';
    this.urlGitHub = 'https://api.github.com/repos/';
  }

  gitHubCommits = (login = 'EugenSergeev', reposit = 'graduate_work') => {
    let tempString = `${this.urlGitHub}${login}/${reposit}/commits`;
    return fetch(tempString,
      {
        method: `GET`,
      })
      .then(res => this.checkRes(res))
      .catch(err => this.alertError(err))
  }

  newsApiRequest = (request, dateFrom, dateTo, endPoints = 'everything') => {
    let tempString = '';
    if (endPoints == 'everything') {
      tempString = `${this.urlNews}${endPoints}?q=${request}&excludeDomains=lifehacker.ru&apiKey=${this.apiKey}&from=${dates.newsApiFormat(dateFrom)}&to=${dates.newsApiFormat(dateTo)}&pageSize=100`;
    } else {
      tempString = `${this.urlNews}${endPoints}?q=${request}&apiKey=${this.apiKey}&pageSize=100`;
    }
    return fetch(tempString)
      .then(res => this.checkRes(res))
      .catch(err => this.alertError(err))
  }

  alertError(err) {
    alert(`Ошибка: ${err.status} - ${err.statusText}.\nВозможно есть проблемы с соединением`);
  }

  checkRes(res) {
    if (res.ok) {
      console.log('ok');
      return res.json();
    }
    return Promise.reject(res);
  }
}
