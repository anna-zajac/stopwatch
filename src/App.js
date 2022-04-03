import { useState } from "react";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import Button from "./components/Button/Button";


const App = () => {

  const [time, setTime] = useState({hours: 0., minutes: 0., seconds: 0, miliseconds: 0});
  const [interval, setInt] = useState();

  const start = () => {
    run();
    setInt(setInterval(run, 100));
  }

  const run = () =>{

    if(time.minutes === 60){
      time.hours++;
      time.minutes = 0;
    }

    if(time.seconds === 60){
      time.minutes++;
      time.seconds = 0;
    }

    if(time.miliseconds === 100){
      time.seconds++;
      time.miliseconds = 0;
    }

    time.miliseconds++;
    return setTime({hours: time.hours, minutes: time.minutes, seconds: time.miliseconds})
  }

  const pause = () => {
    clearInterval(interval);
  }

  const reset = () => {
    clearInterval(interval);
    return setTime({hours: 0, minutes: 0, seconds: 0, miliseconds: 0})
  }
  
  return (
    <div>
      <FormattedTime time={time}/>
      <Button onClick={start}> Start </Button>
      <Button onClick={pause}> Stop </Button>
      <Button onClick={reset}> Reset </Button>
    </div>
  );
}

export default App;
