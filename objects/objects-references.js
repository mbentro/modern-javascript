let myAccount = {
  name: "Matt's Account",
  expenses: 0,
  income: 0
}


let addExpense = function(account, amount){
  account.expenses += amount
}

//addIncome - add income to account
//resetAccount - reset account to 0
//getAccountSummary - print summary of account
//Account for '' has $. $ in income. $ in expenses
 
//addIncome, addExpense, check account, reset, get summary
let addIncome = function(account, amount){
  account.income += amount
}

let resetAccount = function (account){
  account.income = 0
  account.expenses = 0
}

let getAccountSummary = function(account){
  return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses`
}
 
addIncome(myAccount, 1500)
addExpense(myAccount, 500)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))