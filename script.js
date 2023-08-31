// get elements
const month = document.querySelector("h3");
const day = document.querySelector("#day");
const date = document.querySelector("#date");
const fullYear = document.querySelector("#fullYear");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const amPm = document.querySelector("#amPm");

// variables
const englishWeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const englishMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const now = new Date();
month.textContent = englishMonths[now.getMonth()];
day.textContent = englishWeekDays[now.getDay()];
date.textContent = now.getDate();
fullYear.textContent = now.getFullYear();

// functions
// always shows to digits
function alwaysTwoDigits(num) {
  return num < 10 ? "0" + num : num;
}
// returns the current time in a 12 hours base
function timePasses(hoursEl, minutesEl, secondsEl, infoEl) {
  const now = new Date();
  const numHours = now.getHours();
  const numMinutes = now.getMinutes();
  const numSeconds = now.getSeconds();
  hoursEl.textContent =
    numHours > 12 ? alwaysTwoDigits(+numHours - 12) : alwaysTwoDigits(numHours);
  minutesEl.textContent = alwaysTwoDigits(numMinutes);
  secondsEl.textContent = alwaysTwoDigits(numSeconds);
  infoEl.textContent = numHours >= 12 ? "PM" : "AM";
  return { numHours, numMinutes, numSeconds };
}

// init
setInterval(() => timePasses(hours, minutes, seconds, amPm), 100);
