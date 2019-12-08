// *** CLOCK

const clockEl = document.querySelector('#clock');
const dateEl = document.querySelector('#date');
const timeEl = document.querySelector('#time');
const weekday = document.querySelector('#weekday');
const dayOfMonth = document.querySelector('#dayOfMonth');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const updateClock = () => {
    // dateEl.innerHTML = moment().format('YYYY-MM-DD');
    weekday.innerHTML = moment().format('dddd');
    dayOfMonth.innerHTML = moment().format('D');
    month.innerHTML = moment().format('MMM');
    year.innerHTML = moment().format('YYYY');
    


    timeEl.innerHTML = moment().format('HH:mm:ss');
}


updateClock();
const secondTicker = setInterval(updateClock, 1000);


