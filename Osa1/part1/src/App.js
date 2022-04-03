import React, { Component }  from 'react';

const Header = (props) => {
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Content = () => {
    return(
      <div>
        <Part props={part1} exercises={exercises1}/>
        <Part props={part2} exercises={exercises2}/>
        <Part props={part3} exercises={exercises3}/>
      </div>
    )
  }

  return (
    <div>
      <Header course = {course}/>
      <Content/>
      <Total e1= {exercises1} e2= {exercises2} e3= {exercises3}/>
    </div>
  )
}

export default App;
