'use strict';

let counter = 0;

//console.log(process.env);

//Will terminate the infinite loop when counter is equal to 2
const k = setInterval(function(){
  console.log(`Called ${++counter} times`);
  if(counter === 2){
    clearInterval(k);
  }
}, 3000)

//Will wait to cin some info, it will parse into uppercase
process.stdin.on('data', function(d){
 console.log(d.toString().toUpperCase());
})

//Callbacks
