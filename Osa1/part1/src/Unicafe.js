import React, { Component } from "react";
import { useState } from "react";

const Statistics = (p) => {
  if (p.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>{p.text}</h1>
      <div>
        <a>Good {p.good}</a>
      </div>
      <div>
        <a>Neutral {p.neutral}</a>
      </div>
      <div>
        <a>Bad {p.bad}</a>
      </div>
      <div>
        <a>All {p.all}</a>
      </div>
      <div>
        <a>Avarge {p.avarge}</a>
      </div>
      <div>
        <a>Positive {p.positive}</a>
      </div>
    </div>
  );
};

const Unicafe = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sumGood = () => {
    setGood(good + 1);
  };
  const sumNeutral = () => {
    setNeutral(neutral + 1);
  };
  const sumBad = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;
  const avarge = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good * 100) / all;

  return (
    <div>
      <h1>Give FeedBack</h1>
      <button onClick={sumGood}>Good</button>
      <button onClick={sumNeutral}>Neutral</button>
      <button onClick={sumBad}>Bad</button>
      <Statistics
        text={"Statistics"}
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        avarge={avarge}
        positive={positive}
      />
    </div>
  );
};

export default Unicafe;
