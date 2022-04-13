import React, { Component }  from 'react';
import { useState } from 'react';


/*
const Hello = ({ name, age }) => {
    //1. tapaa   
    //const name = p.name
    //const age = p.age 
    
    //2. tapaa
    //const {name, age} = p


    const bornYear = () => new Date().getFullYear() - age
    return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born {bornYear()}</p>
      </div>
    )
  }
  */

  const Display = ({ counter }) => <div>{counter}</div>
/*   const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  ) */
  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  
  const App2 = () => {
/*       const [counter, setCounter] = useState(0)
      const [aika, setAika] = useState(0)
      //console.log(counter);
      const increaseByOne = () => { setCounter(counter + 1)}
      const decreaseByOne = () => { setCounter(counter - 1)}
      const setToZero = () => {setCounter(0)}

    return (
    <div>
        <Display counter = {counter}/>
        <Button   handleClick = {increaseByOne}
        text = "+"
        />
        <Button handleClick = {setToZero}
        text = "Reset"
        />
        <Button handleClick = {decreaseByOne}
        text = "-"
        />
    </div>
    ) */
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
  
    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }
  
    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }
    
      return (
        <div>
          <div>
            {left}
            <Button handleClick={handleLeftClick} text='left' />
            <Button handleClick={handleRightClick} text='right' />
            {right}
            <p>{allClicks.join(' ')}</p>
            <History allClicks={allClicks} />
          </div>
        </div>
      )
    
  }

  export default App2;