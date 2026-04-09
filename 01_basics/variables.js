const accountId = 144553

let accountEmail = "harsh@gmail.com"

var accountPassword = "har123u"

accountCity = "Greater Noida"

let accountState

// accountId = 2 not allowed

/*
prefer not to use var
because of issue in block scope and functional scope.
*/
console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountState)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])