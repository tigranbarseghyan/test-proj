'use strict';

const speak = function(arr){
  const newArray = [];
  for (const i of arr){
    newArray.push(i.toUpperCase());
  }
  return newArray;
}

const res = speak(['foo', 'bar', 'gar']);
console.log(res);
