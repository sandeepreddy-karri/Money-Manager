// Write your code here
import './index.css'

const TransactionItem = props => {
  const {itemList, deleteTransaction} = props
  const {id, title, amount, type} = itemList

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="statement-container1">
      <div className="box1">
        <p className="para1">{title}</p>
        <p className="para1">Rs {amount}</p>
        <p className="para1">{type}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        testid="delete"
        onClick={onDeleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
