import React, { Component }  from 'react';
import { useState } from 'react'

const Unicafe = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sumGood = () => {setGood(good+1)}
  const sumNeutral = () => {setNeutral(neutral+1)}
  const sumBad = () => {setBad(bad+1)}

  const all = good + neutral + bad
  const avarge = (good * 1 + neutral * 0 + bad * -1) / all
  const positive = (good * 100) / all
  
  return (
    <div>
      <h1>Give FeedBack</h1>
      <button onClick={sumGood}>Good</button>
      <button onClick={sumNeutral}>Neutral</button>
      <button onClick={sumBad}>Bad</button>
      <h1>Statistics</h1>
      <div>
        <a>Good {good}</a>
      </div>
      <div>
        <a>Neutral {neutral}</a>
      </div>
      <div>
        <a>Bad {bad}</a>
      </div>
      <div>
        <a>All {all}</a>
      </div>
      <div>
        <a>Avarge {avarge}</a>
      </div>
      <div>
        <a>Good {positive}</a>
      </div>
    </div>
  )
}

export default Unicafe;