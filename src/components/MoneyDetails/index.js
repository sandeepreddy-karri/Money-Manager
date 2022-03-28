// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expense, balance} = props

  return (
    <div className="moneyDetails">
      <div className="balance moneyCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-img"
        />
        <div>
          <p className="detailsTitle">Your Balance</p>
          <p
            className="amountDetails"
            testid="balanceAmount"
          >{`Rs ${balance}`}</p>
        </div>
      </div>
      <div className="income moneyCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-img"
        />
        <div>
          <p className="detailsTitle">Your Income</p>
          <p
            className="amountDetails"
            testid="incomeAmount"
          >{`Rs ${income}`}</p>
        </div>
      </div>
      <div className="expense moneyCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-img"
        />
        <div>
          <p className="detailsTitle">Your Expenses</p>
          <p
            className="amountDetails"
            testid="expensesAmount"
          >{`Rs ${expense}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
