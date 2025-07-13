// Create a function that determines wheteher or not a given year is a leap year.
// A leap year is a year that is divisible by 4, but not by 100 unless it is also divisible by 400.
const leapYears = year => (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

// Do not edit below this line
module.exports = leapYears;
