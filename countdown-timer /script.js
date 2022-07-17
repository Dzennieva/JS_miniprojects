const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('mins');
const seconds = document.getElementById('secs');

// get countdown date

const getNewYear = new Date("Jan 1, 2023");

// Update the count down every 1 second
const countDown = setInterval(() => {

// Get today's date and time
const currentDay = new Date().getTime();

// Find the difference between now and the count down date
let difference = (getNewYear - currentDay);

// Time calculations for days, hours, minutes and seconds
let dys = Math.floor(difference / (1000 * 60 * 60 *24));
let hrs = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
let mins = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
let secs = Math.floor(difference % (1000 * 60) / 1000);

days.innerHTML = dys;
hours.innerHTML = hrs;
minutes.innerHTML = mins;
seconds.innerHTML = secs;

// If the count down is over, write some text 
if (difference < 0) {
    clearInterval(countDown);
    document.getElementById("demo").innerHTML = "Time up";
  }
}, 1000);


