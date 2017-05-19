'use strict';

//fat arrow function, or lambda
//(arguments) => {body}

const upper = (str) => {
  return str.toUpperCase();
}

const PORT = 8080;

const gth = (str) => {
  return "Go To Hell 3:)"
}

module.exports = {
  upper,
  gth,
  PORT
}
