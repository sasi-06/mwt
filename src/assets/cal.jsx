import { useState } from 'react'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')

  const calculateBMI = () => {
    if (!weight || !height) return
    const heightInMeters = height / 100
    const bmiValue = weight / (heightInMeters * heightInMeters)
    setBmi(bmiValue.toFixed(2))
  }

  const clear = () => {
    setWeight('')
    setHeight('')
    setBmi('')
  }

  return (
    <>
      <h1>BMI Calculator</h1>

      <div>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>Calculate</button>
        <button onClick={clear}>Clear</button>
      </div>

      {bmi && (
        <p>
          Your BMI: {bmi} {' '}
          {bmi < 18.5
            ? '(Underweight)'
            : bmi < 24.9
            ? '(Normal weight)'
            : bmi < 29.9
            ? '(Overweight)'
            : '(Obese)'}
        </p>
      )}
    </>
  )
}

export default App
