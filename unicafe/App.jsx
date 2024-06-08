import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
}

const Button = ({onClick, text}) => {
  return(<button onClick={onClick}>{text}</button>)
}

const Statistics = (props) => {
  const {all, good, neutral, bad}=props
  if (all.length===0) {
    return (
      <>
        <h1>Statistics</h1>
        <div>No feedback given.</div>
        </>
    )
  }

  let avg=0.00
  let sum=0
  let positive=0.00
  if (all.length!==0) {
    for (let i=0;i<all.length;i++) {
      sum+=all[i]
      if (all[i]===1) {
        positive++
      }
    }
    avg=sum/all.length
    positive=positive*100.00/all.length
  }
  return (
    <>
      <h2>Stats</h2>
      <table>
        <tbody>
          <StatisticLine text='Good' value={good}/>
          <StatisticLine text='Neutral' value={neutral}/>
          <StatisticLine text='Bad' value={bad}/>
          <StatisticLine text='Total' value={all.length}/>
          <StatisticLine text='Average' value={avg}/>
          <StatisticLine text='Positive' value={positive+'%'}/>
          </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll]= useState([])

  const goodClick = () => {
    const newGood=good+1
    setGood(newGood)
    setAll(all.concat(1))
  }

  const neutralClick = () => {
    const newNeutral=neutral+1
    setNeutral(newNeutral)
    setAll(all.concat(0))

  }

  const badClick = () => {
    const newBad= bad+1
    setBad(newBad)
    setAll(all.concat(-1))

  }

  return (
    <div>
      <h1>Provide Feedback</h1>
      <Button onClick={goodClick} text='Good'/>
      <Button onClick={neutralClick} text='Neutral'/>
      <Button onClick={badClick} text='Bad' />
      <Statistics all={all} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App