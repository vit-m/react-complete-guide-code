import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem(props) {

  return (
    <>
      {props.data.map((item) => (
        <div key={item.id} className='expense-item'>
          <ExpenseDate date={item.date} />
          <div className='expense-item__description'>
            <h2>{item.title}</h2>
            <div className='expense-item__price'>${item.amount}</div>
          </div>
        </div>
      ))}
    </>
  )
}
