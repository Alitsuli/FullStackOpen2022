import React, { Component } from "react";
import { useState } from "react";

const Button = (p) => {
  return (
    <>
      <button onClick={p.handleClick}>{p.text}</button>
    </>
  );
};
const StatisticLine = (p) => {
  if (p.text === "positive") {
    return (
      <div>
        {p.text} {p.value.toFixed(1)} %
      </div>
    );
  }
  if (p.text === "average") {
    return (
      <div>
        {p.text} {p.value.toFixed(1)}
      </div>
    );
  } else {
    return (
      <div>
        {p.text} {p.value}
      </div>
    );
  }
};
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
      <h1>statistics</h1>
      <StatisticLine text="good" value={p.good} />
      <StatisticLine text="neutral" value={p.neutral} />
      <StatisticLine text="bad" value={p.bad} />
      <StatisticLine text="all" value={p.all} />
      <StatisticLine text="average" value={p.avarge} />
      <StatisticLine text="positive" value={p.positive} />
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
      <Button handleClick={sumGood} text={"Good"} />
      <Button handleClick={sumNeutral} text={"Neutral"} />
      <Button handleClick={sumBad} text={"Bad"} />
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
