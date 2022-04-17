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
    return <div>{p.value.toFixed(1)} %</div>;
  }
  if (p.text === "average") {
    return <div>{p.value.toFixed(1)}</div>;
  } else {
    return <div>{p.value}</div>;
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
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>
              <StatisticLine text="good" value={p.good} />
            </td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>
              <StatisticLine text="neutral" value={p.neutral} />
            </td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>
              <StatisticLine text="bad" value={p.bad} />
            </td>
          </tr>
          <tr>
            <td>All</td>
            <td>
              <StatisticLine text="all" value={p.all} />
            </td>
          </tr>
          <tr>
            <td>Average</td>
            <td>
              <StatisticLine text="average" value={p.avarge} />
            </td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>
              <StatisticLine text="positive" value={p.positive} />
            </td>
          </tr>
        </tbody>
      </table>
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
