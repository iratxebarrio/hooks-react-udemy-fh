export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2, counter3} = state;

  return (
    <>
      <h1>Counter: {counter1} </h1>
      <h1>Counter: {counter2} </h1>
      <h1>Counter: {counter3} </h1>

      <hr />

      <button className="btn" onClick={() => setCounter({
        ...state,
        counter1: counter1 + 1
        //coge todo el state, lo mantiene y sobreescribimos solo la propiedad counter1

      })}>+1</button>
      {/* <button className="btn" onClick={() => setCounter({
        counter1: counter1,
        counter2: counter2 +1,
        counter3: counter3
      })}>+1</button>
      <button className="btn" onClick={() => setCounter({
        counter1: counter1,
        counter2: counter2,
        counter3: counter3 + 1
      })}>+1</button> */}


    </>
  );
};

import React, { useState } from "react";
