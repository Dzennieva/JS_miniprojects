const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('mins');
const seconds = document.getElementById('secs');

con

function countDown() {
    const currentDay = new Date();
    let h = currentDay.getHours();
    let m = currentDay.getMinutes();
    let s = currentDay.getSeconds();

    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    setTimeout(getTime, 1000);
}

getTime();

function addZero(i) {
    if(i < 10) {i = '0' + i};
    return i;
}

