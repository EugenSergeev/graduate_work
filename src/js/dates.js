class Dates {
  constructor() {
  }

  now = () => new Date();

  daysAgo = (dayTo,days) => new Date(dayTo.getFullYear(), dayTo.getMonth(), dayTo.getDate() - days);

  analiticsFormat = (date) => {
    return `${new Date(date).getDate()}, ${this.nameDay(new Date(date).getDay())}`;

  }

  nameDay = (n) => {
    switch (n) {
      case 1: return 'пн'
      case 2: return 'вт'
      case 3: return 'ср'
      case 4: return 'чт'
      case 5: return 'пт'
      case 6: return 'сб'
      case 0: return 'вс'
    }
  }
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
