import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handelClick}>
    {props.text}
  </button>
)

const MostVoted = (props) => {
  let newArr = [...props.arrVoted].sort((a, b) => b - a)
  let taller = props.arrVoted.indexOf(newArr[0])
  return (
    <>
      <h1> Anecdote with most votes</h1>
      <p>{props.arrAnecdotes[taller]}</p>
      <DisplayVotes allVoted={newArr} selected = {0}/>
    </>
  )
}

const DisplayAnecdoteOfTheDay = (props) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{props.arrAnecdotes[props.selected]} </div>
    </>
  )
}

const DisplayVotes = (props) => {
  return (
    <>
      has {props.allVoted[props.selected]} votes
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [allVoted, setVote] = useState(Array(anecdotes.length).fill(0))

  const setToSelected = newValue => {
    setSelected(newValue)
  }

  const setToVoted = (newValue, selected) => {
    const copyAllVoted = [...newValue]
    copyAllVoted[selected] += 1
    setVote(copyAllVoted)
  }

  return (
    <div>
      <div>
        <DisplayAnecdoteOfTheDay arrAnecdotes={anecdotes} selected={selected} />
        <DisplayVotes allVoted={allVoted} selected={selected} />
      </div>
      <div>
        <Button handelClick={() => setToVoted(allVoted, selected)} text="vote" />
        <Button handelClick={() => setToSelected(Math.floor(Math.random() * 6))} text="next anecdote" />
      </div>
      <div>
        <MostVoted arrVoted={allVoted} arrAnecdotes={anecdotes} />
      </div>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)