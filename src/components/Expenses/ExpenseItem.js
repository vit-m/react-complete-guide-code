import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import './Expenses.css'

export default function ExpenseItem(props) {

  const clickHandler = () => {
    console.log('Clicked!');
  }

  return (
    <div className='expenses'>
      {props.data.map((item) => (
        <Card key={item.id} className='expense-item'>
          <ExpenseDate date={item.date} />
          <div className='expense-item__description'>
            <h2>{item.title}</h2>
            <div className='expense-item__price'>${item.amount}</div>
          </div>
          <button onClick={clickHandler}>Change Title</button>
        </Card>
      ))}
    </div>
  )
}
