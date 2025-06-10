import { useState, useEffect } from "react";
import { Wrapper, CounterText, Button, Label, Input } from "./Components";

export const CounterPage = () => {
  const [initialCounter, setInitialCounter] = useState(10);
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    setCounter(initialCounter);
    const id = setInterval(() => {
      console.log("Countdown:", initialCounter);
      setCounter((prevCounter) =>
        prevCounter > 0 ? prevCounter - 1 : prevCounter
      );
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [initialCounter]);
  return (
    <Wrapper>
      <CounterText>{counter}</CounterText>
      <div>
        <Button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
          -1
        </Button>{" "}
        <Button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          +1
        </Button>
      </div>
      <Label>
        <span>Initial Counter</span>
        <input
          value={initialCounter}
          onChange={(event) => setInitialCounter(Number(event.target.value))}
        ></input>
      </Label>
    </Wrapper>
  );
};

export default CounterPage;
