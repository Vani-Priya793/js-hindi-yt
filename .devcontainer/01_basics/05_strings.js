//strings can be within single and double quotes
//string is an object
const name = "vani"              // string declaration
const repoCount = 50
console.log(name + repoCount);  //outdated syntax

//we recommend to use backticks string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vani-hc-com')      //string declaration, using new keywords

console.log(gameName[0])            //accessing keys
console.log(gameName.__proto__)     //accessing prototype

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,5)    //can't give negative values
console.log(newString)

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

//trim
const newStringOne = "    vani   "  
console.log(newStringOne)
console.log(newStringOne.trim())   

//replace
const url = "https://vani.com/vani%20priya"
console.log(url.replace('%20','-'))
console.log(url.includes('vani'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'))



