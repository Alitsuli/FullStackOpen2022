import React, { Component } from "react";
import { useState } from "react";

const Random = (p) => {
  const [points, setPoints] = useState(Array(p.anecdotes.length).fill(0));
  const rand = Math.floor(Math.random() * p.anecdotes.length);

  const vote = () => {
    const copy = [...points];
    copy[rand] += 1;
    return setPoints(copy);
  };

  return (
    <div>
      <h1>{p.text}</h1>
      <div>
        <p>{p.anecdotes[rand]}</p>
        <p>Has {points[rand]} vote</p>
      </div>
      <div style={{ float: "left" }}>
        <button onClick={vote}>Vote</button>
      </div>
      <div>
        <button onClick={p.handleClick}> {p.text2} </button>
      </div>
      <div>
        <h1>{p.text3}</h1>
        <p>{p.anecdotes[points.indexOf(Math.max(...points))]}</p>
        <p>Has {points[points.indexOf(Math.max(...points))]} votes</p>
      </div>
    </div>
  );
};

const Anecdotes = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);

  const next = () => {
    setSelected(selected + 1);
  };

  return (
    <div>
      <Random
        text={"Anecdote of the day"}
        anecdotes={anecdotes}
        handleClick={next}
        text2={"Next anecdote"}
        text3={"Anecdote with most votes"}
      />
    </div>
  );
};

export default Anecdotes;
