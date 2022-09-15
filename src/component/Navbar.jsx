import React, { useState } from "react";

export default function SetTimeOut() {
  const [time, setTime] = useState('');
  setInterval(function () {
    var date = new Date();
    // setTime(date.toLocaleTimeString())
    setTime(date.toLocaleTimeString().slice(0, 10))
    if (date.toLocaleTimeString().slice(0, 10) === "3:12:10") {
      alert('Check Out')

    }

  }, 1000);
  return (
    <div className="fx">
      <div>
        <nav >
          <ul className="time">
            <li >ម៉ោង: {time}</li>
          </ul>
        </nav>
      </div>
      <div>
          <nav> 
              <ul>
                <a href='#'>
                  <li>អំពីខ្ញុំ</li>
                </a>
                <a href='#'>
                  <li>ជំនាញ</li>
                </a>
                <a href='#'>
                  <li>គម្រោង</li>
                </a>
                <a href='#'>
                  <li>ទំនាក់ទំនង</li>
                </a>
              </ul>
            </nav>
      </div>
    </div>
  )
}