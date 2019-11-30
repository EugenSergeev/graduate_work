import { l } from './script';

export class Api {
  constructor() {
    this.apiKey = 'e5eaab959f5c432780b91b754fa7cab6';
    this.url = 'https://newsapi.org/v2/everything?q=';

  }

  newsApiRequest = (request, dateFrom, dateTo) => {
    const tempString = `${this.url}${request}&excludeDomains=lifehacker.ru&apiKey=${this.apiKey}&from=${dateFrom}&to=${dateTo}&pageSize=100`;

    return fetch(tempString)
      .then(res => this.checkRes(res))
      .catch(err => this.alertError(err))
  }

  alertError(err) {
    alert(`Ошибка: ${err.status} - ${err.statusText}.\n
          Возможно есть проблемы с соединением`);

  }

  checkRes(res) {
    if (res.ok) return res.json();
    return Promise.reject(res);
  }
  /*
      formatDate = (date) => {

          var dd = date.getDate();
          if (dd < 10) dd = '0' + dd;

          var mm = date.getMonth() + 1;
          if (mm < 10) mm = '0' + mm;

          var yyyy = date.getFullYear();
          if (yy < 10) yy = '0' + yy;

          return dd + '.' + mm + '.' + yy;
      }
  */
}

//https://newsapi.org/v2/everything?q=Ира&excludeDomains=lifehacker.ru&apiKey=e5eaab959f5c432780b91b754fa7cab6&pageSize=100
