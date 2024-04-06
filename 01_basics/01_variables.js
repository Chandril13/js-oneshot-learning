const accountId = 132312 //right  practice
let accountEmail = "parzivalunix@gmail.com" //right practice
var accountPassword = "12345" //wrong practice
accountCity = "Jaipur" //absolutely wrong practice
let accountState;

// accountId = 2  //const reassignment is not allowed

accountPassword = "23347746"
accountEmail = "chchchch@gmail.com"
accountCity = "Kolkata"

console.log(accountId)

/**
 Prefer not to use var
 because of issue in block scope and functional scope
 */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])