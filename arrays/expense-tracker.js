const account = {
  name: 'Matt',
  expenses: [],
  income: [],
  addExpense: function (text, amount) {
    this.expenses.push({
      text: text, 
      amount: amount
    })
  },

  addIncome: function(text, amount){
    this.income.push({
      text: text,
      amount: amount
    })
  },

  getAccountSummary: function() {
    let totalExpenses = 0
    let totalIncome = 0
    let totalBalance = 0

    this.expenses.forEach(function(expense){
      totalExpenses += expense.amount
    });
    this.income.forEach(function(income){
      totalIncome += income.amount
    })
    totalBalance = totalIncome - totalExpenses

    return `${this.name} has a balance of $${totalBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
  }
}

account.addIncome('Paycheck', 1000)
account.addIncome('Paycheck', 1000)
account.addExpense('Rent', 1070)
account.addExpense('Sushi', 75)

console.log(account.getAccountSummary())
