import './MortgageCalculator.css';
import { useState, useEffect } from 'react';

export default function MortgageCalculator() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(20);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState(0);
  const [percentOffset, setPercentOffset] = useState('102px')

  useEffect(() => {
    let monthly = parseFloat(rate) / 100 / 12;
    let num_payments = years * 12
    let dividend = amount * monthly * Math.pow(1 + monthly, num_payments)
    let divisor = Math.pow(1 + monthly, num_payments) - 1
    setResult(Math.round(dividend / divisor * 100) / 100)
  }, [amount, rate, years])

  useEffect(() => {
    let offset = 120 - (rate.toString().length * 7.4);
    setPercentOffset(`${offset}px`);
  }, [rate])

  
  return (
    <div className='calc-wrapper'>
    <form>
      
      <div id='amount-wrapper' className='input-wrapper'>
      <label id='amount-label' htmlFor='amount'>Loan Amount</label>
        <span className='calc-input-symbol' id='calc-dollar-sign'>$</span>
        <input type="number" name='amount' id='calc-amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
      </div>
      <div className='calc-child-grid'>
      <div>
        <label htmlFor='rate'>Annual interest rate</label>
        <div id='rate-wrapper' className='input-wrapper'>
          <span className='calc-input-symbol' id='calc-percent-sign' style={{right: percentOffset}}>%</span>
          <input type="number" name='rate' id='calc-rate' value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
      </div>
      <div>
        <label htmlFor='years'>Loan term</label>
        <div id='yrs-wrapper' className='input-wrapper'>
          <input type="number" name='years' id='calc-yrs' value={years} onChange={(e) => setYears(e.target.value)}/>
          <span className='calc-input-symbol' id='calc-yrs-sign'>yrs</span>
        </div>
    </div>
    </div>
    </form>

<div className='results'>
<h3>Monthly payment</h3>
<h4>${result}</h4>
</div>






</div>
  );
}
