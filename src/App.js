import React, { useState } from "react";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";

const App = () => {

  const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0, miliseconds: 0});
  const [int, setInt] = useState();

  const start = () => {
    if (!int) setInt(setInterval(run, 100));
  }

  const run = () => {
    setTime (time => {
      const timeCopy = {...time};

    timeCopy.miliseconds++;

    if(timeCopy.miliseconds === 100){
      timeCopy.seconds++;
      timeCopy.miliseconds = 0;
    }

    if(timeCopy.seconds === 60){
      timeCopy.minutes++;
      timeCopy.seconds = 0;
    }

    if(timeCopy.minutes === 60){
      timeCopy.hours++;
      timeCopy.minutes = 0;
    }


    return {hours: timeCopy.hours, minutes: timeCopy.minutes, seconds: timeCopy.seconds, miliseconds: timeCopy.miliseconds}
 
    });
  }

  const pause = () => {
    clearInterval(int);
    setInt(null);
  }

  const reset = () => {
    clearInterval(int);
    setInt(null);
    return setTime({hours: 0, minutes: 0, seconds: 0, miliseconds: 0})
  }
  
  return (
    <Container>
      <FormattedTime time={time}/>
      <Button onClick={start}> Start </Button>
      <Button onClick={pause}> Stop </Button>
      <Button onClick={reset}> Reset </Button>
    </Container>
  );
}

export default App;
