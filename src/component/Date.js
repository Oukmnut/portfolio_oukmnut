import React, { useState } from "react";

export default function SetTimeOut() {
  const [time, setTime] = useState('');
  setInterval(function () {
    var date = new Date();
    // setTime(date.toLocaleTimeString())
    setTime(date.toLocaleTimeString().slice(0, 7))
    if (date.toLocaleTimeString().slice(0, 7) === "4:31:30") {
      alert('Check Out')

    }

  }, 1000);
  return (
    <div className="clock">
      <h1>Time: {time}</h1>
    </div>
  )
}


