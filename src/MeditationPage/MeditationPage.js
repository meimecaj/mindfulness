import React, { useState } from "react";
import { useTrail, animated as a } from "react-spring";
import "./meditation-page.css";
import meditationSteps from "../utils/meditationSteps";

const config = { mass: 5, tension: 200, friction: 50 };

export default function MeditationPage() {
  const [toggle, set] = useState(true);
  const trail = useTrail(Object.keys(meditationSteps).length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 800,
    reset: false,
    reverse: false,
  });

  return (
    <div className="meditation-page-container">
      <p className="meditation-page-title">
        This is a guided meditation. Follow the steps as slowly as you would
        like.
      </p>
          <div className="trails-main">
            {trail.map(({ x, height, ...rest }, index) => (
              <a.div
                key={meditationSteps[index]}
                style={{
                  ...rest,
                  transform: x.to((x) => `translate3d(0,${x}px,0)`),
                }}
              >
                <a.div style={{ height }}>{meditationSteps[index]}</a.div>
              </a.div>
            ))}
        </div>
    </div>
  );
}
