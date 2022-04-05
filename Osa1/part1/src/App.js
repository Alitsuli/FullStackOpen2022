import React, { Component }  from 'react';

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = ({props, exercises}) => {
  return(
    <div>
      <p>{props} {exercises}</p>
    </div>
  )
}


const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Content = () => {

    let partName = parts.map(nimiElementti =>{
      return `${nimiElementti.name}`;
    })

    let partExercises = parts.map(harjoitusElementti =>{
      return `${harjoitusElementti.exercises}`;
    })

    return(
      <div>
        <Part props={partName[0]} exercises={partExercises[0]}/>
        <Part props={partName[1]} exercises={partExercises[1]}/>
        <Part props={partName[2]} exercises={partExercises[2]}/>
      </div>
    )
  }

  const Total = () => {

    let total = parts.map(harjoitusElementti =>{
      return harjoitusElementti.exercises;
    })
    
    return(
      <div>
        <p>Number of exercises {total[0] + total[1] + total[2]}</p>
      </div>
    )
  }


  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App;
