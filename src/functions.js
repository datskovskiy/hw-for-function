function isBigger(a, b) {
  return a - b > 0;
};

function isSmaller(a, b) {
  return !isBigger(a, b);
};

function getMin(...numbers) {
  return numbers.reduce((min, current) => current < min ? current : min, numbers[0]);
}

function makeNumber(string) {
  return string.replace(/\D/g, '');
};

function countNumbers(string) {
  let stringNumbers = makeNumber(string);

  let obj = {};

  for (let i = 0; i <= 9; i++) {
    let regexp = new RegExp(`${i}`, 'g');
    let regExpResult = stringNumbers.match(regexp);

    if (regExpResult !== null)
      obj[i] = regExpResult.length;
  }

  return obj;
};

function pipe(number, ...functions) {
  for (let i = 0; i < functions.length; i++)
    number = functions[i](number);

  return number;
}

function isLeapYear(date) {
  let dt;

  if (typeof date === 'string') {
    if (isNaN(Date.parse(date)))
      return 'Invalid Date';
      
    dt = new Date(Date.parse(date));
  }

  if (typeof date === 'number') {
    dt = new Date(date);

    if (isNaN(dt))
      return 'Invalid Date';
  }

  let year = dt.getFullYear();

  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
    ? `${year} is a leap year`
    : `${year} is not a leap year`;
};


module.exports = {
  isBigger,
  isSmaller,
  makeNumber,
  countNumbers,
  getMin,
  pipe,
  isLeapYear,
};
