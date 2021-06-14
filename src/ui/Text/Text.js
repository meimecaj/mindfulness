import React, { useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import "./text.css";

export default function Text(props) {
  const n = useRef(0);
  const headerTextProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    reverse: false,
    delay: 600,
    config: { ...config.molasses, duration: 3000 },
  });

  const divProps = useSpring({
    loop: () => 0 > n.current++,
    from: { y: 0 },
    to: { y: -350 },
    config: { duration: 2000 },
    delay: 1500,
    onRest: () => props.animationRest("visible")
  });

  return (
    <div className="main-text">
      <animated.div style={divProps}>
        <animated.h1 style={headerTextProps}>
          How are you feeling today?
        </animated.h1>
      </animated.div>
    </div>
  );
}
