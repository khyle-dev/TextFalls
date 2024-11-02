import { useStopwatch } from "react-timer-hook";

const Timer = () => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  console.log(isRunning);

  return (
    <>
      <div>{seconds}</div>
      <button onClick={pause}>Start</button>
    </>
  );
};

export default Timer;
