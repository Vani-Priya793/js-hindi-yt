const score = 400     //number declaration
console.log(score);


const balance = new Number(100)
console.log(balance);
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.8966
console.log(otherNumber)
console.log(otherNumber.toPrecision(3))

const othernumber = 123.8966
console.log(othernumber)
console.log(othernumber.toPrecision(3))

const OtherNumber = 1123.8966
console.log(OtherNumber)
console.log(OtherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))   //in INDIAN way


//++++++++++++++++++   MATHS  ++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))           //ceiling value
console.log(Math.floor(4.9))          //floor value
console.log(Math.sqrt(64))
console.log(Math.min(4,3,6,8,9))
console.log(Math.max(4,3,6,8,9))

console.log(Math.random())     //value always lies btw 0 and 1
console.log((Math.random()*10) + 1)   
console.log(Math.floor(Math.random()*10) + 1)   
 
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+ min )  //formula











