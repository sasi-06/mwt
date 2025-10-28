import { useState } from 'react'

function App() {
  const rates = {
    USD: 1,
    INR: 83.0,
    EUR: 0.93,
    GBP: 0.78,
    JPY: 151.5,
    AUD: 1.52,
  }

  const currencies = Object.keys(rates)

  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')
  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState('')

  const convert = () => {
    if (!amount || amount <= 0) return
    const converted = (amount / rates[fromCurrency]) * rates[toCurrency]
    setResult(converted.toFixed(2))
  }

  return (
    <>
      <h1>Currency Calculator</h1>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>

        <button onClick={convert}>Convert</button>
      </div>

      {result && (
        <p>
          {amount} {fromCurrency} = {result} {toCurrency}
        </p>
      )}
    </>
  )
}

export default App
