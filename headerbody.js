'use strict';

const retVal = (myList) => {
  const data = myList.reduce((prev, total) => prev + total);
  console.log(data.split('\r\n\r\n')[0]);
  console.log('EXAV');
  console.log(data.split('\r\n\r\n')[1]);
}

module.exports = {
  retVal
}
