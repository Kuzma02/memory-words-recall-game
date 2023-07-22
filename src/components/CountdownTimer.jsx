import React, { useState, useEffect } from "react";
import "../styles/CountdownTimer.css";

const CountdownTimer = ({ initialTime, goToRecallLevel }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Function to update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        // Timer has reached zero, call the goToRecallLevel function
        goToRecallLevel();
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [timeLeft, goToRecallLevel]);

  // Format seconds into HH:mm:ss
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="countdown-main">
      <h1>Timer: </h1>
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
};

export default CountdownTimer;
