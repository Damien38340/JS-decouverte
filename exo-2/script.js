let isTesting = true;

const myDate = new Date();

let weekDays = "Time to work!";
let weekEnd = "Let's chill out a bit";

let today;
let currentHour;

if (isTesting) {
    today = prompt("Choose a day");
    currentHour = prompt("Choose an hour");
} else {
    today = myDate.getDay();
    currentHour = myDate.getHours();
}


if (today === 0 || today === 6) {
    console.log(weekEnd);
} else if (today === 5 && currentHour >= 17) { //if we're friday after 5pm
    console.log(weekEnd);
} else if (today === 1 && currentHour <= 9) { //if we're monday before 9 am
    console.log(weekEnd);
} else {
    console.log(weekDays);
}


console.log(today);
console.log(currentHour);