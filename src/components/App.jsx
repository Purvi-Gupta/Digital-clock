import React, { useState } from "react";

function App() {
  setInterval(showTime, 1000);

  const now = new Date().toLocaleTimeString("it-IT");

  const [time, setTime] = useState(now);

  function showTime() {
    const newTime = new Date().toLocaleTimeString("it-IT");
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
