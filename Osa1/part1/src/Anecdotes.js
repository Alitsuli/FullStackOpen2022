import React, { Component } from "react";
import { useState } from "react";

const Random = (p) => {
  const maxLenght = p.anecdotes;
  const rand = Math.floor(Math.random() * maxLenght.length);
  return (
    <div>
      <p>{maxLenght[rand]}</p>
    </div>
  );
};

const Button = (p) => {
  return (
    <div>
      <button on onClick={p.handleClick}>
        {p.text}
      </button>
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
      <Random anecdotes={anecdotes} />
      <Button handleClick={next} text={"Next anecdote"} />
    </div>
  );
};

export default Anecdotes;
