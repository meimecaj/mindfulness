import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./breathing-page.css";

export default function BreathingPage() {
  const [playing, setPlaying] = useState(false);
  const [key, setKey] = useState(0);


  return (
    <div className="breathing-page-container">
      <p className="breathing-page-title">
        This is a breathing exercise to help you relax. You should inhale for 5
        seconds and exhale for 5 seconds. Do this for as long as you need to.
      </p>

      <div className="timer">
        <CountdownCircleTimer
          key={key}
          isPlaying={playing}
          duration={5}
          colors={[
            ["#91B2C7", 0.33],
            ["#9197C7", 0.33],
            ["#91C7C1", 0.33],
          ]}
          size={400}
          strokeWidth={30}
          trailStrokeWidth={20}
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
