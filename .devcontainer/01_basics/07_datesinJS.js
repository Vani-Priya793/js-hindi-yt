//DATES
let myDate = new Date()
console.log(myDate)
console.log(typeof myDate)       //interview

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

let myCreatedDate = new Date(2023, 0, 23)     //date declaration, also class m month 0 se start hote h
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())

let mycreatedDate = new Date(2023, 3, 23, 5, 3)     //date declaration
console.log(mycreatedDate)
console.log(mycreatedDate.toLocaleString())

let MycreatedDate = new Date("2023-01-14")     //date declaration, iss format(dd-mm-yy) me month 1 se start hota h, but we don't recommend to follow this format
console.log(MycreatedDate)
console.log(MycreatedDate.toLocaleString())

let Mycreateddate = new Date("01-14-2025")     //date declaration, iss format(mm-dd-yy) to we recommend in india 
console.log(Mycreateddate)
console.log(Mycreateddate.toLocaleString())

let myTimeStamp = Date.now()     //1 jan, 1970 ko milliseconds me convert krta hai
console.log(myTimeStamp)
console.log(Mycreateddate.getTime()) 
console.log(Math.floor(Date.now()/1000))    //interview, seconds me convert krne k tareeka

let newDate = new Date()
console.log(newDate)
console.log(newDate.getFullYear())
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))























