 const accountId = 1604
 let accountemail = "rohit_kashyap@google.com"
 var accountPassword = "12345"
 accountCity = "delhi"
 let accountState;



 accountemail = "Rk.rk@google.com"
 accountPassword = "99999"
 accountCity="jaipur"

// accountId=1234 // Not allowed to change the constant defined values
 console.log(accountId);

 //lets try console.table method for multiple output at the sametime........//

 console.table([accountId,accountPassword,accountemail,accountCity,accountState])



 /*
prefer not to use var
because issue in block scope and functional scope
 */