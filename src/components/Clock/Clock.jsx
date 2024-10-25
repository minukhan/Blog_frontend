import React, { useEffect } from "react";
import "./clockStyle.css";

function Clock() {
  useEffect(() => {
    const hourHand = document.querySelector(".hour");
    const minuteHand = document.querySelector(".minute");
    const secondHand = document.querySelector(".second");

    const updateTime = () => {
      let date = new Date();
      let secToDeg = (date.getSeconds() / 60) * 360;
      let minToDeg = (date.getMinutes() / 60) * 360;
      let hrToDeg = (date.getHours() / 12) * 360;
      secondHand.style.transform = `rotate(${secToDeg}deg)`;
      minuteHand.style.transform = `rotate(${minToDeg}deg)`;
      hourHand.style.transform = `rotate(${hrToDeg}deg)`;
    };

    const intervalId = setInterval(updateTime, 1000);

    updateTime();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <div className="clock">
        <label style={{ "--i": 1 }}>
          <span></span>
        </label>
        <label style={{ "--i": 2 }}>
          <span></span>
        </label>
        <label style={{ "--i": 3 }}>
          <span></span>
        </label>
        <label style={{ "--i": 4 }}>
          <span></span>
        </label>
        <label style={{ "--i": 5 }}>
          <span></span>
        </label>
        <label style={{ "--i": 6 }}>
          <span></span>
        </label>
        <label style={{ "--i": 7 }}>
          <span></span>
        </label>
        <label style={{ "--i": 8 }}>
          <span></span>
        </label>
        <label style={{ "--i": 9 }}>
          <span></span>
        </label>
        <label style={{ "--i": 10 }}>
          <span></span>
        </label>
        <label style={{ "--i": 11 }}>
          <span></span>
        </label>
        <label style={{ "--i": 12 }}>
          <span></span>
        </label>
        <div className="indicator">
          <span className="hand hour"></span>
          <span className="hand minute"></span>
          <span className="hand second"></span>
        </div>
      </div>
    </div>
  );
}

export default Clock;
