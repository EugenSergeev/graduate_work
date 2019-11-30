const l = (text) => console.log(text);

class Dates {
  constructor() {
  }

  now = () => new Date();

  daysAgo = (dayTo,days) => new Date(dayTo.getFullYear(), dayTo.getMonth(), dayTo.getDate() - days);



  newsApiFormat = (date) => {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    if (yyyy < 10) yyyy = '0' + yyyy;

    return yyyy + '-' + mm + '-' + dd;
  }

  cardsFormat = (dateMs) => {
    const date = new Date(dateMs);
    return `${date.toLocaleString('ru', {month: 'long',day: 'numeric'})}, ${date.getFullYear()}`;
  }
}

export const dates = new Dates();
