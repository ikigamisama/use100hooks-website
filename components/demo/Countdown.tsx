import { useCountdown } from "use100hooks";

const Countdown = () => {
  const countdownDuration = {
    years: 0,
    months: 0,
    days: 1,
    hours: 12,
    minutes: 0,
    seconds: 0,
  };

  const countdown = useCountdown(countdownDuration);

  return (
    <div>
      <h1>Countdown Example</h1>
      <p>Years: {countdown.years}</p>
      <p>Months: {countdown.months}</p>
      <p>Days: {countdown.days}</p>
      <p>Hours: {countdown.hours}</p>
      <p>Minutes: {countdown.minutes}</p>
      <p>Seconds: {countdown.seconds}</p>
    </div>
  );
};
export default Countdown;
