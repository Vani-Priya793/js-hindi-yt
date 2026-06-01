const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //we can do it but we should not declare it like this
let accountState; //in js, applying semicolon is upto you
// in accountState, we learnt that value is undefined if we don't apply any value


//accountId = 2  //not allowed
   
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "bengaluru"

console.log(accountId); //we can use it but for many outputs, we use console.table([])

//prefer not to use var bcz of issue in block scope and functional scope

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //newer values will be the output, not the older one

