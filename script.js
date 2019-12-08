// *** CLOCK

const clockEl = document.querySelector('#clock');
// const dateEl = document.querySelector('#date');
// const timeEl = document.querySelector('#time');
const weekday = document.querySelector('#weekday');
const dayOfMonth = document.querySelector('#dayOfMonth');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

const separator = document.querySelectorAll('.separator');

const updateClock = () => {
    // dateEl.innerHTML = moment().format('YYYY-MM-DD');
    weekday.innerHTML = moment().format('dddd');
    dayOfMonth.innerHTML = moment().format('D');
    month.innerHTML = moment().format('MMM');
    year.innerHTML = moment().format('YYYY');
    
    // timeEl.innerHTML = moment().format('HH:mm:ss');
    hour.innerHTML = moment().format('HH');
    minute.innerHTML = moment().format('mm');
    second.innerHTML = moment().format('ss'); 
    
    separator.forEach(function(sep) {
        sep.classList.toggle('hidden');
    })
};

updateClock();
const secondTicker = setInterval(updateClock, 1000);


