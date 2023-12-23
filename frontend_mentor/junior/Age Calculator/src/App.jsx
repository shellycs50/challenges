import { useState } from 'react'
import { intervalToDuration} from 'date-fns'
import { useSpring, animated } from 'react-spring'
import './App.css'

function App() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const [display, setDisplay] = useState({
    years: '- -',
    months: '- -',
    days: '- -'
  })

  const [isError, setIsError] = useState({
    years: false,
    months: false,
    days: false
  })

  const month_day_count = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31 
  ]

  function date_is_valid() {
    let errors = {
      years: false,
      months: false,
      days: false
    }
    if (month > 12 || month < 1 || month === '') {
      errors.months = true
      console.log('month error')
    }
    if (day > 31 || day < 1 || month_day_count[month - 1] && day > month_day_count[month - 1] || day === '') {
      errors.days = true;
      console.log('day error')
    }
    //leap year
    if (year % 4 != 0 && month == 2 && day > 28) {
      console.log('leap year error')
      errors.days = true;
    }

    if (year === '' || year > new Date().getFullYear()) {
      errors.years = true;
    }
    
    for (const key in errors) {
      if (errors[key] == true) {
        setIsError(errors)
        return false;
      }
    }
    setIsError(errors)
    return true;
  }

  function displayBirthday() {
    let birthday = new Date(year, month - 1, day)
    let current = new Date()
    const diff = intervalToDuration({start: birthday, end: current})
    setDisplay({
      years: diff.years || '- -',
      months: diff.months || '- -',
      days: diff.days || '- -'
    })
  }

  function clickHandler() {
    if (date_is_valid() === true) {
      displayBirthday()
    }
    else {
      setDisplay({
        years: '- -',
        months: '- -',
        days: '- -'
      })
    }
  }

  const error_color = "hsl(0, 100%, 67%)"
  const label_color = "hsl(0, 1%, 44%)"
  const input_color = "hsl(0, 0%, 86%)"

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0},
      number: n,
      delay: 100,
      config: { mass: 1, tension: 23, friction: 10},
    });
    return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
  }

  return (
    <div className='birthday-wrapper'>
      <div className='form-wrapper'>
        <form className='grid-3'>
        <label htmlFor='day' style={{color: isError.days ? error_color : label_color}}>DAY</label>
          <label htmlFor='month' style={{color: isError.months ? error_color : label_color}}>MONTH</label>
          <label htmlFor='year' style={{color: isError.years ? error_color : label_color}}>YEAR</label>
          
          <input type='number' id='day' name='day' value={day} style={{borderColor: isError.days ? error_color : input_color}} onChange={(e) => setDay(e.target.value != '' ? parseInt(e.target.value) : e.target.value)} />
          <input type='number' id='month' name='month' value={month} style={{borderColor: isError.months ? error_color : input_color}} onChange={(e) => setMonth(e.target.value != '' ? parseInt(e.target.value) : e.target.value)} />
          <input type='number' id='year' name='year' value={year} style={{borderColor: isError.years ? error_color : input_color}} onChange={(e) => setYear(e.target.value != '' ? parseInt(e.target.value) : e.target.value)} />

          <p className='error-message'>{isError.days ? "Must be a valid day" : " "}</p>
          <p className='error-message'>{isError.months ? "Must be a valid month" : " "}</p>
          <p className='error-message'>{isError.years ? "Must be in the past" : " "}</p>
        </form>
        </div>
        <div className='activate-wrapper'>
          <a className='activate-birthday' onClick={clickHandler}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stopColor="#41D1FF"></stop><stop offset="100%" stopColor="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stopColor="#FFEA83"></stop><stop offset="8.333%" stopColor="#FFDD35"></stop><stop offset="100%" stopColor="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg></a>
        </div>
      

      <div className='content'>
        <h2><span className='value-display'>{display.years == '- -' ? display.years : <Number n={display.years} />}</span>years</h2>
        <h2><span className='value-display'>{display.months == '- -' ? display.months : <Number n={display.months} />}</span>months</h2>
        <h2><span className='value-display'>{display.months == '- -' ? display.months : <Number n={display.days} />}</span>days</h2>
      </div>

    </div>
  )
}

export default App
