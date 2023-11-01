import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = ({ text, value, sufix }) => {
  return (
    <>{text} {value} {sufix}</>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good || neutral || bad) {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <tr>
              <td><StatisticsLine text="good" /></td>
              <td><StatisticsLine value={good} /></td>
            </tr>
            <tr>
              <td><StatisticsLine text="neutral" /></td>
              <td><StatisticsLine value={neutral} /></td>
            </tr>
            <tr>
              <td><StatisticsLine text="bad" /></td>
              <td><StatisticsLine value={bad} /></td>
            </tr>
            <tr>
              <td><StatisticsLine text="all" /></td>
              <td><StatisticsLine value={good + neutral + bad} /></td>
            </tr>
            <tr>
              <td><StatisticsLine text="average" /></td>
              <td><StatisticsLine value={(good - bad) / (good + neutral + bad)} /></td>
            </tr>
            <tr>
              <td><StatisticsLine text="positive" /></td>
              <td><StatisticsLine value={good * 100 / (good + neutral + bad)} sufix="%" /></td>
            </tr>
          </tbody>
        </table >
      </>
    )
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <p><StatisticsLine text="No feedback given" /></p>
      </>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    setGood(newValue)
  }
  const setToNeutral = newValue => {
    setNeutral(newValue)
  }
  const setToBad = newValue => {
    setBad(newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)