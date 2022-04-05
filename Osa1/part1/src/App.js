import React, { Component }  from 'react';

const Header = (props) => {
  console.log(props);
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Content = () => {
    return(
      <div>
        <Part props={part1.name} exercises={part1.exercises}/>
        <Part props={part2.name} exercises={part2.exercises}/>
        <Part props={part3.name} exercises={part3.exercises}/>
      </div>
    )
  }

  return (
    <div>
      <Header course = {course}/>
      <Content/>
      <Total e1= {part1.exercises} e2= {part2.exercises} e3= {part3.exercises}/>
    </div>
  )
}

export default App;
