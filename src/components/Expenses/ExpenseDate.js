import './ExpenseDate.css'

export default function ExpenseDate(props) {
  const month = (val) => val.toLocaleString('en-US', { month: 'long' })
  const day = (val) => val.toLocaleString('en-US', { day: '2-digit' })
  const year = (val) => val.getFullYear()

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month(props.date)}</div>
      <div className='expense-date__year'>{year(props.date)}</div>
      <div className='expense-date__day'>{day(props.date)}</div>
    </div>
  )
}
