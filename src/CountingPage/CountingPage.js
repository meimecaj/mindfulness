import React, { useState } from "react";
import "./counting-page.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function CountingPage() {
  const [playing, setPlaying] = useState(false);
  const [key, setKey] = useState(0);

  return (
    <div className="counting-page-container">
      <p className="counting-page-title">
        This is a counting exercise to help you relax. Feel free to do this
        exercise as long as you need to.
      </p>

      <div className="timer">
        <CountdownCircleTimer
          key={key}
          isPlaying={playing}
          duration={100}
          colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33],
          ]}
          size={500}
          strokeWidth={0}
          trailStrokeWidth={0}
          onComplete={() => [{ shouldRepeat: true, delay: 1000 }]}
        >
          {({ remainingTime }) => {
            return (
              <div>
                <div className="timer-number">{remainingTime}</div>
                <button
                  className="timer-button timer-button-play-pause"
                  onClick={() => setPlaying(!playing)}
                >
                  PLAY/PAUSE
                </button>
                <button
                  className="timer-button timer-button-reset"
                  onClick={() => setKey((prevKey) => prevKey + 1)}
                >
                  RESET
                </button>
              </div>
            );
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
