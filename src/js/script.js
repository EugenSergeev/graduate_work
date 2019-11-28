const l = (text) => console.log(text);


export class Search {
    constructor () {
        this.string = document.querySelector('.search__input');
        this.button = document.querySelector('.search__button');
        this.form = document.querySelector('.search__wrap');
        this.addListeners();
        this.fillSearchString();
        this.preloader = document.querySelector('.preloader');
        this.noresult = document.querySelector('.answer_noresult');
        this.content = document.querySelector('.content');
    }

    preloaderToggleDisable = () =>{
        this.preloader.classList.toggle('disable');
    }

    noresultToggleDisable = () =>{
        this.noresult.classList.toggle('disable');
    }
   
    contentToggleDisable = () =>{
        this.content.classList.toggle('disable');
    }


    addListeners() {
        this.string.addEventListener('input', this.validateInput);
        this.form.addEventListener('submit', this.sendRequest);
      
    }

    fillSearchString(){
        if (sessionStorage.getItem('request')==null){
            this.string.placeholder = localStorage.getItem('request');
        } else this.string.value = sessionStorage.getItem('request');
    }

    validateInput = (event) => {
        let string = event.target;
        string.value = string.value.trim();  // пробелы в начале и конце
        if (!string.value.match(/^[\wА-я]*$/g)) { //в строке только буквы или цифры
            string.style.color = "red";
        } else string.style.color = "#1A1B22";
    }

    sendRequest = (event) => {
        event.preventDefault();
        l(this.string.value);
        this.preloaderToggleDisable();
        localStorage.setItem('request',this.string.value);
        sessionStorage.setItem('request',this.string.value);
    }


};

const search = new Search();